import asyncio
from spotimy.scraper.v1 import ScraperServiceStub, ScrapeRequest

from grpclib.client import Channel


async def main():
    channel = Channel(host="127.0.0.1", port=50051)
    service = ScraperServiceStub(channel)
    response = await service.scrape(ScrapeRequest(user_id="123"))
    print(response.content)

    # don't forget to close the channel when done!
    channel.close()


if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())