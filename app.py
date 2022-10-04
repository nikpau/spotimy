from typing import List, Sequence, Tuple

import dotenv
import spotipy
import _helper
from datetime import datetime
from spotipy import Spotify
from _types import (
    Playlists, SimpleTrack,
    Track, TopArtist, Tracks, 
    TrackHistoryEntry
)

dotenv.load_dotenv()
    
def list_liked_songs(sp: Spotify) -> List[SimpleTrack]:
    tracks = []
    results = sp.current_user_saved_tracks(limit=50)
    while results:
        for item in results['items']:
            track = item['track']
            tracks.append(SimpleTrack(
                title=track['name'],
                artist=track['artists'][0]['name']
            ))
        results = sp.next(results) if results["next"] else None
    return tracks

def list_all_songs(sp: Spotify) -> List[Track]:
    out = []
    playlists = Playlists(sp.current_user_playlists())
    while playlists:
        for playlist_id in playlists.ids:
            tracks = Tracks(sp.playlist_items(
                    playlist_id,limit=100))
            while tracks:
                # TODO check if order is preserved
                track_features = sp.audio_features(tracks.get_ids())
                bpms = []
                for feature in track_features:
                    bpms.append(feature["tempo"] if feature is not None else -1)
                    durations = tracks.get_durations()
                args = list(zip(tracks.get_ids(),tracks.get_titles(),
                                tracks.get_artists(),bpms, durations))
                out.extend([Track(*a) for a in args])
                if tracks.next is not None:
                    tracks = Tracks(sp.next(tracks.payload))
                else: tracks = None
        if playlists.next is not None:
            playlists = Playlists(sp.next(playlists.payload))
        else: playlists = None
    return out
        

def top_artists(tracks: Sequence[SimpleTrack],top_n: int = None) -> List[TopArtist]:
    artists = [track.artist for track in tracks]
    tops = dict()
    for artist in artists:
        if artist in tops.keys():
            tops[artist] += 1 
        else: tops[artist] = 1
    sorted_artists = sorted(tops.items(), key=lambda item: item[1],reverse=True)
    top_artist_list = [TopArtist(name,count) for name,count in sorted_artists]
    return top_artist_list[:top_n] if top_n is not None else top_artist_list

def listening_history(sp: Spotify) -> List[TrackHistoryEntry]:
    """Get the last 50 tracks the current user listened to
    as a list of (Track,timestamp) tuples."""
    history = Tracks(sp.current_user_recently_played())
    ids = history.get_ids()
    track_features = sp.audio_features(ids)
    bpms = []
    for feature in track_features:
        bpms.append(feature["tempo"] if feature is not None else -1)
    timestamps = history.played_at()
    durations = history.get_durations()
    args = list(zip(ids,history.get_titles(),
                    history.get_artists(),bpms,durations))
    out = []
    for a,ts in zip(args,timestamps):
        out.append(TrackHistoryEntry(Track(*a),datetime.fromisoformat(ts[:-1])))
    return out
 

# TODO Make summary