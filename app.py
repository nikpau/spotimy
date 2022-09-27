from dataclasses import dataclass
from typing import List, Sequence, Tuple

import dotenv
import spotipy
from spotipy import Spotify
from spotipy.oauth2 import SpotifyOAuth

dotenv.load_dotenv()

@dataclass(frozen=True)
class SimpleTrack:
    title: str
    artist: str


# Set scope to
scope = "user-library-read"

sp = Spotify(auth_manager=SpotifyOAuth(scope=scope))

    
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

def top_artists(tracks: Sequence[SimpleTrack],top_n: int = None) -> List[Tuple[str,int]]:
    artists = [track.artist for track in tracks]
    tops = dict()
    for artist in artists:
        if artist in tops.keys():
            tops[artist] += 1 
        else:
            tops[artist] = 1
    
    out = sorted(tops.items(), key=lambda item: item[1],reverse=True)
    return out[:top_n] if top_n is not None else out
        
# TODO Make summary

