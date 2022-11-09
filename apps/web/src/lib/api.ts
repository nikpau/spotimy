import { createConnectTransport, createPromiseClient } from '@bufbuild/connect-web'
import { ArtistService } from '@spotimy/api-web/music/artists/v1/artist_connectweb.js'
import { GenresService } from '@spotimy/api-web/music/genres/v1/genre_connectweb.js'
import { TrackHistoryService } from '@spotimy/api-web/music/tracks/v1/history_connectweb.js'
import { TrackService } from '@spotimy/api-web/music/tracks/v1/track_connectweb.js'

import { UserService } from '@spotimy/api-web/user/v1/user_connectweb.js'

const GATEWAY_URL = 'http://localhost:50002'

const transport = createConnectTransport({
	baseUrl: GATEWAY_URL
})
export const artistClient = createPromiseClient(ArtistService, transport)
export const trackClient = createPromiseClient(TrackService, transport)
export const trackHistoryClient = createPromiseClient(TrackHistoryService, transport)
export const genresClient = createPromiseClient(GenresService, transport)
export const userClient = createPromiseClient(UserService, transport)
