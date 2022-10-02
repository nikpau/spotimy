import { prisma } from '$lib/server/db.js'
import type { default as db } from '@prisma/client'
import { DateTime, Interval } from 'luxon'
import { testTracks, type Track } from './tracks.js'

export type TrackHistoryEntry = {
  track: Track
  playedAt: Date
}

export type TrackHistory = TrackHistoryEntry[]

export interface TrackHistoryService {
  list: (user_id: number, start?: DateTime, end?: DateTime) => Promise<TrackHistory>
}

export const trackHistoryService: TrackHistoryService = {
  list: async (
    user_id: number,
    start?: DateTime | undefined,
    end?: DateTime | undefined
  ): Promise<TrackHistory> => {
    const history = await prisma.trackHistory.findMany({
      where: {
        userId: user_id,
        timestamp: {
          gte: start?.toJSDate() ?? undefined,
          lte: end?.toJSDate() ?? undefined
        }
      },
      include: {
        track: true
      }
    })

    return history.map(toServiceModel)
  }
}

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

function toServiceModel(
  trackHistory: db.TrackHistory & {
    track: db.Track
  }
): TrackHistoryEntry {
  const { track, timestamp } = trackHistory

  return {
    track: {
      name: track.title,
      artist_id: track.artistId?.toString() ?? '',
      genres: [],
      bpm: track.bpm
    },
    playedAt: timestamp
  }
}
