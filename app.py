from typing import List, Sequence

import dotenv
import spotipy
from spotipy import Spotify
from _types import (
    AggregatedPlaylists, SimpleTrack,
    Track, TopArtist, TracksFromPlaylist
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
    playlists = AggregatedPlaylists(sp.current_user_playlists())
    while playlists:
        for playlist_id in playlists.ids:
            tracks = TracksFromPlaylist(
                sp.playlist_items(playlist_id,limit=100)
            )
            while tracks:
                # TODO check if order is preserved
                track_features = sp.audio_features(tracks.ids)
                bpms = []
                for feature in track_features:
                    bpms.append(feature["tempo"] if feature is not None else -1)
                for t,a,bpm,id in zip(tracks.titles,tracks.artists,bpms,tracks.ids):
                    out.append(Track(t,a,bpm,id))
                tracks = TracksFromPlaylist(sp.next(tracks.payload)) if tracks.next else None
        if playlists.next is not None:
            playlists = AggregatedPlaylists(sp.next(playlists.payload))
        else:
            playlists = None
    return out
        

def top_artists(tracks: Sequence[SimpleTrack],top_n: int = None) -> List[TopArtist]:
    artists = [track.artist for track in tracks]
    tops = dict()
    for artist in artists:
        if artist in tops.keys():
            tops[artist] += 1 
        else:
            tops[artist] = 1
    sorted_artists = sorted(tops.items(), key=lambda item: item[1],reverse=True)
    top_artist_list = [TopArtist(name,count) for name,count in sorted_artists]
    return top_artist_list[:top_n] if top_n is not None else top_artist_list

# TODO Make summary