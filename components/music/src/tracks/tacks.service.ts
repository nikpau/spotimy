import * as db from '@prisma/client'
import {
  ListTracksRequest,
  ListTracksResponse,
  Track as APITrack,
  TrackServiceServiceImplementation
} from '@spotimy/api/music/tracks/v1/track.js'
import { DeepPartial } from '@spotimy/api/scraper/v1/scraper.js'
import { CallContext } from 'nice-grpc'

type Track = APITrack

export class TrackService implements TrackServiceServiceImplementation {
  constructor(private readonly storage: db.PrismaClient) {}

  async listTracks(
    request: ListTracksRequest,
    context: CallContext
  ): Promise<DeepPartial<ListTracksResponse>> {
    console.debug('Incoming call to listArtists')

    const args: db.Prisma.TrackFindManyArgs = {}

    if (request.ids) {
      args.where = {
        id: {
          in: request.ids.map((id) => parseInt(id))
        }
      }
    }

    const tracks = await this.storage.track.findMany()
    return {
      tracks: tracks.map(fromStorage)
    }
  }
}

function fromStorage(dbTrack: db.Track): APITrack {
  return {
    ...dbTrack,
    name: dbTrack.title,
    artistId: dbTrack.artistId?.toString() ?? '',
    bpm: dbTrack.bpm ?? 0,
    genres: []
  }
}
