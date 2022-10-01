import { genresServiceMock } from '$lib/api/genre.js'
import { artistsServiceMock } from './artists.js'
import { trackHistoryServiceMock, type TrackHistoryService } from './history.js'

interface API {
  track_history: TrackHistoryService
}

const MockAPI = {
  artists: artistsServiceMock,
  history: trackHistoryServiceMock,
  genres: genresServiceMock
}

// const RealAPI = {
//   artists: artistsServiceMock,
//   history: trackHistoryService
// }

export const API = MockAPI
