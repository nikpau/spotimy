import asyncio
from spotimy_client.scraper.v1 import ScrapeRequest, ScrapeResponse, ScraperServiceBase
from grpclib.server import Server


class ScraperService(ScraperServiceBase):
    async def scrape(self, request: ScrapeRequest) -> "ScrapeResponse":
        print("Incoming request")
        response = ScrapeResponse(f"Hello {request.user_id}!")
        print(response)
        return response


async def main():
    server = Server([ScraperService()])
    port = 50011
    print(f"Starting server on port {port}")
    await server.start("0.0.0.0", port)
    await server.wait_closed()

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    print(f"Starting 👍🏻")
    loop.run_until_complete(main())