from collections import namedtuple
from dataclasses import dataclass
from typing import List, Sequence, TypeVar

import dotenv
import spotipy
from spotipy import Spotify

dotenv.load_dotenv()

TrackID = TypeVar("TrackID",bound=str)

@dataclass(frozen=True)
class SimpleTrack:
    title: str
    artist: str
    
@dataclass(frozen=True)
class Track:
    title: str
    artists: str | Sequence[str]  
    bpm: int
    track_id: TrackID
    
    
TopArtist = namedtuple("TopArtist",["name","count"])


# Set scope to
    
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
    playlists = sp.current_user_playlists()
    while playlists:
        for playlist in playlists["items"]:
            tracks = sp.playlist_items(playlist["id"],limit=100)
            while tracks:
                _track_ids = [track["track"]["id"] for track in tracks["items"]]
                _track_ids = [id for id in _track_ids if id is not None]
                # TODO check if order is preserved
                _track_features = sp.audio_features(_track_ids)
                _bpms = [feature["tempo"] if feature is not None else -1 for feature in _track_features]
                _artists = [
                    [artist["name"] for artist in track["track"]["artists"]] 
                    for track in tracks["items"]
                ]
                _titles = [track["track"]["name"] for track in tracks["items"]]
                for t,a,bpm,id in zip(_titles,_artists,_bpms,_track_ids):
                    out.append(Track(t,a,bpm,id))
                tracks = sp.next(tracks) if tracks["next"] else None
        playlists = sp.next(playlists) if playlists["next"] else None
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