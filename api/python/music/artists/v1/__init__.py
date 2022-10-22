# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: music/artists/v1/artist.proto
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
class Artist(betterproto.Message):
    id: str = betterproto.string_field(1)
    name: str = betterproto.string_field(2)
    images: List["Image"] = betterproto.message_field(3)
    counts: "ArtistCounts" = betterproto.message_field(4)


@dataclass(eq=False, repr=False)
class Image(betterproto.Message):
    url: str = betterproto.string_field(1)
    width: int = betterproto.int32_field(2)
    height: int = betterproto.int32_field(3)


@dataclass(eq=False, repr=False)
class ArtistCounts(betterproto.Message):
    in_liked_songs: int = betterproto.int32_field(1)
    in_playlists: int = betterproto.int32_field(2)


@dataclass(eq=False, repr=False)
class ListArtistsRequest(betterproto.Message):
    query: str = betterproto.string_field(1)


@dataclass(eq=False, repr=False)
class ListArtistsResponse(betterproto.Message):
    artists: List["Artist"] = betterproto.message_field(1)


class ArtistServiceStub(betterproto.ServiceStub):
    async def list_artists(
        self,
        list_artists_request: "ListArtistsRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "ListArtistsResponse":
        return await self._unary_unary(
            "/music.artists.v1.ArtistService/ListArtists",
            list_artists_request,
            ListArtistsResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )


class ArtistServiceBase(ServiceBase):
    async def list_artists(
        self, list_artists_request: "ListArtistsRequest"
    ) -> "ListArtistsResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def __rpc_list_artists(
        self, stream: "grpclib.server.Stream[ListArtistsRequest, ListArtistsResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.list_artists(request)
        await stream.send_message(response)

    def __mapping__(self) -> Dict[str, grpclib.const.Handler]:
        return {
            "/music.artists.v1.ArtistService/ListArtists": grpclib.const.Handler(
                self.__rpc_list_artists,
                grpclib.const.Cardinality.UNARY_UNARY,
                ListArtistsRequest,
                ListArtistsResponse,
            ),
        }
