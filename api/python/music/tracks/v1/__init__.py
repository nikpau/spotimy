# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: music/tracks/v1/history.proto, music/tracks/v1/track.proto
# plugin: python-betterproto
from dataclasses import dataclass
from typing import (
    TYPE_CHECKING,
    Dict,
    List,
    Optional,
)

import betterproto
import grpclib
from betterproto.grpc.grpclib_server import ServiceBase


if TYPE_CHECKING:
    import grpclib.server
    from betterproto.grpc.grpclib_client import MetadataLike
    from grpclib.metadata import Deadline


@dataclass(eq=False, repr=False)
class Track(betterproto.Message):
    name: int = betterproto.int64_field(1)
    artist_id: str = betterproto.string_field(2)
    bpm: int = betterproto.int32_field(3)
    genres: List[str] = betterproto.string_field(4)


@dataclass(eq=False, repr=False)
class ListTracksRequest(betterproto.Message):
    ids: List[str] = betterproto.string_field(1)


@dataclass(eq=False, repr=False)
class ListTracksResponse(betterproto.Message):
    tracks: List["Track"] = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class TrackHistoryEntry(betterproto.Message):
    track: "Track" = betterproto.message_field(1)
    timestamp: int = betterproto.int64_field(2)


@dataclass(eq=False, repr=False)
class ListTrackHistoryRequest(betterproto.Message):
    user_id: str = betterproto.string_field(1)
    start: int = betterproto.int64_field(2)
    end: int = betterproto.int64_field(3)
    limit: int = betterproto.int32_field(4)
    page_token: str = betterproto.string_field(5)


@dataclass(eq=False, repr=False)
class ListTrackHistoryResponse(betterproto.Message):
    entries: List["TrackHistoryEntry"] = betterproto.message_field(1)
    next_page_token: str = betterproto.string_field(2)


class TrackServiceStub(betterproto.ServiceStub):
    async def list_tracks(
        self,
        list_tracks_request: "ListTracksRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "ListTracksResponse":
        return await self._unary_unary(
            "/music.tracks.v1.TrackService/ListTracks",
            list_tracks_request,
            ListTracksResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )


class TrackHistoryServiceStub(betterproto.ServiceStub):
    async def list_track_history(
        self,
        list_track_history_request: "ListTrackHistoryRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "ListTrackHistoryResponse":
        return await self._unary_unary(
            "/music.tracks.v1.TrackHistoryService/ListTrackHistory",
            list_track_history_request,
            ListTrackHistoryResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )


class TrackServiceBase(ServiceBase):
    async def list_tracks(
        self, list_tracks_request: "ListTracksRequest"
    ) -> "ListTracksResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def __rpc_list_tracks(
        self, stream: "grpclib.server.Stream[ListTracksRequest, ListTracksResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.list_tracks(request)
        await stream.send_message(response)

    def __mapping__(self) -> Dict[str, grpclib.const.Handler]:
        return {
            "/music.tracks.v1.TrackService/ListTracks": grpclib.const.Handler(
                self.__rpc_list_tracks,
                grpclib.const.Cardinality.UNARY_UNARY,
                ListTracksRequest,
                ListTracksResponse,
            ),
        }


class TrackHistoryServiceBase(ServiceBase):
    async def list_track_history(
        self, list_track_history_request: "ListTrackHistoryRequest"
    ) -> "ListTrackHistoryResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def __rpc_list_track_history(
        self,
        stream: "grpclib.server.Stream[ListTrackHistoryRequest, ListTrackHistoryResponse]",
    ) -> None:
        request = await stream.recv_message()
        response = await self.list_track_history(request)
        await stream.send_message(response)

    def __mapping__(self) -> Dict[str, grpclib.const.Handler]:
        return {
            "/music.tracks.v1.TrackHistoryService/ListTrackHistory": grpclib.const.Handler(
                self.__rpc_list_track_history,
                grpclib.const.Cardinality.UNARY_UNARY,
                ListTrackHistoryRequest,
                ListTrackHistoryResponse,
            ),
        }
