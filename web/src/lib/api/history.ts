import { DateTime, Interval } from 'luxon'
import { testTracks, type Track } from './tracks.js'

export type TrackHistoryEntry = {
  track: Track
  playedAt: DateTime
}

export type TrackHistory = TrackHistoryEntry[]

export interface TrackHistoryService {
  list: (start: DateTime, end: DateTime) => Promise<TrackHistory>
}

export const trackHistoryService: TrackHistoryService = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  list: async (start: DateTime, end: DateTime): Promise<TrackHistory> => {
    throw Error('Not implemented')
  }
}

export const trackHistoryServiceMock: TrackHistoryService = {
  list: async (start: DateTime, end: DateTime): Promise<TrackHistory> => {
    const totalMinutes = Interval.fromDateTimes(start, end).length('minutes')
    const history: TrackHistoryEntry[] = []

    // Generate a fake entry every 5 minutes.
    const minutesDiff = 5

    for (let offset = 0; offset <= totalMinutes; offset += minutesDiff) {
      const playedAt = start.plus({ minutes: offset })
      const track = testTracks[Math.floor(Math.random() * testTracks.length)]

      history.push({ track, playedAt })
    }

    return history
  }
}
