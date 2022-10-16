import { DateTime, Interval } from 'luxon'
import { testTracks } from '../track/track.data.js'
import type { TrackHistory, TrackHistoryEntry } from './track-history.model.js'
import type { TrackHistoryService } from './track-history.service.js'

export const trackHistoryServiceMock: TrackHistoryService = {
  list: async (
    user_id: number,
    start: DateTime = DateTime.fromJSDate(new Date(2022, 0, 1, 0, 0, 0)),
    end: DateTime = DateTime.fromJSDate(new Date(2022, 0, 1, 2, 0, 0))
  ): Promise<TrackHistory> => {
    const totalMinutes = Interval.fromDateTimes(start, end).length('minutes')
    const history: TrackHistoryEntry[] = []

    // Generate a fake entry every 5 minutes.
    const minutesDiff = 5

    for (let offset = 0; offset <= totalMinutes; offset += minutesDiff) {
      const playedAt = start.plus({ minutes: offset }).toJSDate()
      const track = testTracks[Math.floor(Math.random() * testTracks.length)]

      history.push({ track, playedAt })
    }

    return history
  }
}
