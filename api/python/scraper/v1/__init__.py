# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: scraper/v1/scraper.proto
# plugin: python-betterproto
from dataclasses import dataclass
from typing import (
    TYPE_CHECKING,
    Dict,
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
class ScrapeRequest(betterproto.Message):
    user_id: str = betterproto.string_field(1)


@dataclass(eq=False, repr=False)
class ScrapeResponse(betterproto.Message):
    content: str = betterproto.string_field(1)


class ScraperServiceStub(betterproto.ServiceStub):
    async def scrape(
        self,
        scrape_request: "ScrapeRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "ScrapeResponse":
        return await self._unary_unary(
            "/scraper.v1.ScraperService/Scrape",
            scrape_request,
            ScrapeResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )


class ScraperServiceBase(ServiceBase):
    async def scrape(self, scrape_request: "ScrapeRequest") -> "ScrapeResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def __rpc_scrape(
        self, stream: "grpclib.server.Stream[ScrapeRequest, ScrapeResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.scrape(request)
        await stream.send_message(response)

    def __mapping__(self) -> Dict[str, grpclib.const.Handler]:
        return {
            "/scraper.v1.ScraperService/Scrape": grpclib.const.Handler(
                self.__rpc_scrape,
                grpclib.const.Cardinality.UNARY_UNARY,
                ScrapeRequest,
                ScrapeResponse,
            ),
        }