import { artistsServiceMock } from './artists.js'
import {
  trackHistoryService,
  trackHistoryServiceMock,
  type TrackHistoryService
} from './history.js'

interface API {
  track_history: TrackHistoryService
}

export const MockAPI = {
  artists: artistsServiceMock,
  history: trackHistoryServiceMock
}

export const RealAPI = {
  artists: artistsServiceMock,
  history: trackHistoryService
}

export const API = MockAPI
