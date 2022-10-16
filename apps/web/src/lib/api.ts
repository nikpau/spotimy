import { createConnectTransport, createPromiseClient } from "@bufbuild/connect-web"
import { ArtistService } from "@spotimy/api-web/music/artists/v1/artist_connectweb.js"

const ARTIST_SERVICE_URL = "http://localhost:50002"

const transport = createConnectTransport({
  baseUrl: ARTIST_SERVICE_URL
})
export const artistClient = createPromiseClient(ArtistService, transport)