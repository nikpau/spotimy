import { prisma } from '$lib/server/db.js'
import type { default as db } from '@prisma/client'
import base64url from 'base64url'
import type { CursorPaginatedResult } from '../pagination.js'
import type { TrackHistory, TrackHistoryEntry } from './track-history.model.js'

export interface TrackHistoryService {
  list: (
    user_id: number,
    start?: Date,
    end?: Date,
    limit?: number | undefined,
    cursor?: Date | undefined
  ) => Promise<CursorPaginatedResult<TrackHistory>>
}

export const trackHistoryService: TrackHistoryService = {
  list: async (
    user_id: number,
    start?: Date | undefined,
    end?: Date | undefined,
    limit?: number | undefined,
    cursor?: Date | undefined
  ): Promise<CursorPaginatedResult<TrackHistory>> => {
    console.debug('Query track history', { user_id, start, end, limit, cursor })
    const args: db.Prisma.TrackHistoryFindManyArgs = {
      where: {
        userId: user_id,
        timestamp: {
          gte: end,
          lte: start
        }
      },
      orderBy: {
        timestamp: 'desc'
      }
    }

    if (cursor !== undefined)
      args.cursor = {
        userId_timestamp: {
          userId: user_id,
          timestamp: cursor
        }
      }

    if (limit != undefined) args.take = limit

    const history = await prisma.trackHistory.findMany({
      ...args,
      include: {
        track: true
      }
    })

    const results = history.map(toServiceModel)

    const page_token =
      results.length > 0 ? results[results.length - 1].playedAt.getTime().toString() : ''

    console.debug(
      `[TrackHistory/Service] Found ${results.length} for user history, page_token=${page_token}`
    )

    return {
      results,
      next_page_token: base64url.encode(page_token)
    }
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
