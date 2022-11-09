import asyncio
from spotimy_client.reports.v1 import GetReportRequest, GetReportResponse, Report, ReportServiceBase
from grpclib.server import Server


class ReportService(ReportServiceBase):
    async def scrape(self, request: GetReportRequest) -> GetReportResponse:
        print("Incoming request")
        msg = f"Hello {request.name}"
        response = GetReportResponse(report=Report(report=msg.encode("utf-8")))
        print(response)
        return response


async def main():
    server = Server([ReportService()])
    port = 50052
    print(f"Starting server on port {port}")
    await server.start("0.0.0.0", port)
    await server.wait_closed()

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    print(f"Starting 👍🏻")
    loop.run_until_complete(main())