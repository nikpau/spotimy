import { artistsService } from '$lib/api/artists.js'
import { genresServiceMock } from '$lib/api/genre.js'
import { trackHistoryServiceMock, type TrackHistoryService } from './history.js'

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
