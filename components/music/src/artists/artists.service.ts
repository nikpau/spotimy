import * as db from '@prisma/client'
import {
  Artist as APIArtist,
  ArtistServiceServiceImplementation,
  ListArtistsRequest,
  ListArtistsResponse
} from '@spotimy/api/music/artists/v1/artist.js'
import { DeepPartial } from '@spotimy/api/scraper/v1/scraper.js'
import { CallContext } from 'nice-grpc'

type Artist = APIArtist

export class ArtistService implements ArtistServiceServiceImplementation {
  constructor(private readonly storage?: db.PrismaClient) {}

  async listArtists(
    request: ListArtistsRequest,
    context: CallContext
  ): Promise<DeepPartial<ListArtistsResponse>> {
    console.debug('Incoming call to listArtists')

    const artists = await this.storage!.artist.findMany()
    return {
      artists: artists.map(fromStorage)
    }
  }
}

function fromStorage(dbArtist: db.Artist): Artist {
  return {
    id: dbArtist.id.toString(),
    name: dbArtist.name,
    images: [],
    counts: {
      inLikedSongs: 0,
      inPlaylists: 0
    }
  }
}
