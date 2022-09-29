from collections import namedtuple
from dataclasses import dataclass
from typing import Any, Dict, List, Sequence, TypeVar

PlaylistID = TypeVar("PlaylistID",bound=str)

TopArtist = namedtuple("TopArtist",["name","count"])

@dataclass
class Playlist:
    """
    Playlist object
    """
    name: str
    id: PlaylistID
    descr: str
    is_public: bool
    
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

class AggregatedPlaylists:
    """
    Takes in an api response returned from 
    `spotipy.Spotify().current_user_playlists()` and 
    aggregates 
    """
    
    def __init__(self,_api_response: Dict[str,Any]):
        self.payload = _api_response
        self._validate()
        self.ids = self._get_ids()
        self.all_playlists = self._gather()
        self.next = self.payload["next"]
    
    def _validate(self) -> None | RuntimeError:
        if "playlists" in self.payload["href"]:
            return
        else:
            raise RuntimeError(
                "Expected query to user playlists. Got {}".format(
                    self.payload["href"]
                )
            )
        
    def _get_ids(self) -> List[PlaylistID]:
        _ids = []
        for playlist in self.payload["items"]:
            _ids.append(playlist["id"])
        return _ids

    def _gather(self) -> List[Playlist]:
        _playlists = []
        for playlist in self.payload["items"]:
            _playlists.append(
                Playlist(
                    name=playlist["name"],
                    id=playlist["id"],
                    descr=playlist["description"],
                    is_public=playlist["public"]
                )
            )
        return _playlists

class TracksFromPlaylist:
    """
    Takes in an api response returned from 
    `spotipy.Spotify().playlist_items()` and 
    aggregates 
    """
    
    def __init__(self,_api_response: Dict[str,Any]):
        self.payload = _api_response
        self._validate()
        self.ids = self._get_ids()
        self.titles = self._get_titles()
        self.artists = self._get_artists()
        self.next = self.payload["next"]
    
    def _validate(self) -> None | RuntimeError:
        if "tracks" in self.payload["href"]:
            return
        else:
            raise RuntimeError(
                "Expected query to `tracks`. Got {}".format(
                    self.payload["href"]
                )
            )
        
    def _get_ids(self) -> List[PlaylistID]:
        _ids = []
        for track in self.payload["items"]:
            if track["track"]["id"] is not None:
                _ids.append(track["track"]["id"])
        return _ids

    def _get_titles(self) -> List[str]:
        _titles = []
        for track_obj in self.payload["items"]:
            track = track_obj["track"]
            _titles.append(track["name"])
        return _titles

    def _get_artists(self) -> List[str]:
        _artists = []
        for track_obj in self.payload["items"]:
            track = track_obj["track"]
            _tmp = []
            for artist in track["artists"]:
                _tmp.append(artist["name"])
            _artists.append(_tmp)
        return _artists

    def _gather(self) -> List[Playlist]:
        _tracks = []
        for track in self.payload["items"]:
            _tracks.append(
                Track(

                )
            )
        return _tracks