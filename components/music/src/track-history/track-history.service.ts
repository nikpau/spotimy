import type { default as db } from '@prisma/client';
import {
  ListTrackHistoryRequest,
  ListTrackHistoryResponse,
  TrackHistoryEntry as APITrackHistoryEntry,
  TrackHistoryServiceServiceImplementation
} from '@spotimy/api/music/tracks/v1/history.js';
import { CallContext } from 'nice-grpc';

type TrackHistoryEntry = APITrackHistoryEntry

export class TrackHistoryService implements TrackHistoryServiceServiceImplementation {
  constructor(private readonly storage: db.PrismaClient) {}

  async listTrackHistory(
    request: ListTrackHistoryRequest, context: CallContext): Promise<ListTrackHistoryResponse> 
  {
    const { userId, start, end, limit, pageToken: cursor } = request
    console.debug('Query track history', { userId, start, end, limit, cursor })

    const args: db.Prisma.TrackHistoryFindManyArgs = {
      where: {
        userId: userId,
        timestamp: {
          gte: new Date(end),
          lte: new Date(start)
        }
      },
      orderBy: {
        timestamp: 'desc'
      }
    }

    if (cursor !== undefined)
      args.cursor = {
        userId_timestamp: {
          userId,
          timestamp: cursor
        }
      }

    if (limit != undefined) args.take = limit

    const history = await this.storage.trackHistory.findMany({
      ...args,
      include: {
        track: true
      }
    })

    const results = history.map(toServiceModel)

    const page_token =
      results.length > 0 ? results[results.length - 1].timestamp.toString() : ''

    console.debug(
      `[TrackHistory/Service] Found ${results.length} for user history, page_token=${page_token}`
    )

    return {
      entries: results,
      nextPageToken: page_token
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
      id: track.id,
      name: track.title,
      artistId: track.artistId?.toString() ?? '',
      genres: [],
      bpm: track.bpm ?? 0,
    },
    timestamp: timestamp.getTime(),
  }
}
