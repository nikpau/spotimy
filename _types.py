from collections import namedtuple
from dataclasses import dataclass
from sqlite3 import Timestamp
from typing import Any, Callable, Dict, List, Sequence, TypeVar, Union

PlaylistID = TypeVar("PlaylistID",bound=str)
TrackID = TypeVar("TrackID",bound=str)
TimeStamp = TypeVar("TimeStamp",bound=str)
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

@dataclass(frozen=True)
class SimpleTrack:
    title: str
    artist: str
    
@dataclass(frozen=True)
class Track:
    track_id: TrackID
    title: str
    artists: Union[str, Sequence[str]]
    bpm: float
    duration: float = None # Duration in [ms]
    
@dataclass
class TrackHistoryEntry:
    track: Track
    timestamp: Timestamp

class Playlists:
    """
    Wrapper class for an api response containing 
    a list of playlists as ["items"]
    """
    
    def __init__(self,_api_response: Dict[str,Any]):
        self.payload = _api_response
        self._validate()
        self.ids = self._get_ids()
        self.playlists = self._gather()
        self.next = self.payload["next"]
    
    def _validate(self) -> None:
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
        """
        Gathers playlists from payload to 
        a list of `Playlist` types
        """
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

class Tracks:
    """
    Wrapper class for an api response containing 
    a list of tracks as ["items"]
    """
    
    def __init__(self,_api_response: Dict[str,Any]):
        self.payload = _api_response
        self._validate()
        self.next = self.payload["next"]    
        
    def _has_empty_items(self) -> bool:
        return True if not self.payload["items"] else False
    
    def _validate(self) -> None:
        if "track" in self.payload["items"][0]:
            return
        else:
            raise RuntimeError(
                "Expected response to contain a `track` "
                "field. Got {}".format(
                    repr(self.payload["items"][0].keys())
                )
            )

    def get_ids(self) -> List[PlaylistID]:
        ids = []
        for track in self.payload["items"]:
            if track["track"]["id"] is not None:
                ids.append(track["track"]["id"])
        return ids

    def get_titles(self) -> List[str]:
        titles = []
        for track_obj in self.payload["items"]:
            track = track_obj["track"]
            titles.append(track["name"])
        return titles

    def get_artists(self) -> List[str]:
        artists = []
        for track_obj in self.payload["items"]:
            track = track_obj["track"]
            tmp = []
            for artist in track["artists"]:
                tmp.append(artist["name"])
            artists.append(tmp)
        return artists
    
    def played_at(self) -> List[str]:
        """Returns a list of timestamps
        at which songs have been played at.
        Throws an error if payload does not
        contain a "played_at" field"""            
        if "played_at" not in self.payload["items"][0]:
                raise RuntimeError(
                    "Payload does not conain a 'played_at' "
                    "field. Check your request."
                )
        timestamps = []
        for track_obj in self.payload["items"]:
            timestamps.append(track_obj["played_at"])
        return timestamps
    
    def get_durations(self) -> List[float]:
        """Get song playtimes in [ms]"""
        playtimes = []
        for track_obj in self.payload["items"]:
            track = track_obj["track"]
            playtimes.append(track["duration_ms"])
        return playtimes