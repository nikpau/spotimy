import { prisma } from '$lib/server/db.js'
import type { default as db } from '@prisma/client'
import type { TrackHistory, TrackHistoryEntry } from './track-history.model.js'

export interface TrackHistoryService {
  list: (user_id: number, start?: Date, end?: Date) => Promise<TrackHistory>
}

export const trackHistoryService: TrackHistoryService = {
  list: async (
    user_id: number,
    start?: Date | undefined,
    end?: Date | undefined
  ): Promise<TrackHistory> => {
    const history = await prisma.trackHistory.findMany({
      where: {
        userId: user_id,
        timestamp: {
          gte: start,
          lte: end
        }
      },
      include: {
        track: true
      }
    })

    return history.map(toServiceModel)
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
