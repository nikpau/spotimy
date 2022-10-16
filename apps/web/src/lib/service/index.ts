import { genresServiceMock } from '$lib/service/genre/genre.mock.js'
import { artistsService } from './artist/artist.service.js'
import { trackHistoryServiceMock } from './track-history/track-history.mock.js'
import type { TrackHistoryService } from './track-history/track-history.service.js'

interface API {
  track_history: TrackHistoryService
}

const MockAPI = {
  artists: artistsService,
  history: trackHistoryServiceMock,
  genres: genresServiceMock
}

// const RealAPI = {
//   artists: artistsServiceMock,
//   history: trackHistoryService
// }

export const API = MockAPI
