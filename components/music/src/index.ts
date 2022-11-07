import * as db from '@prisma/client';
import { ArtistServiceDefinition } from '@spotimy/api/music/artists/v1/artist.js';
import { GenresServiceDefinition } from '@spotimy/api/music/genres/v1/genre.js';
import { TrackHistoryServiceDefinition } from '@spotimy/api/music/tracks/v1/history.js';
import { TrackServiceDefinition } from '@spotimy/api/music/tracks/v1/track.js';
import { createServer } from 'nice-grpc';
import { ArtistService } from './artists/artists.service.js';
import { importFixtures } from './fixtures/index.js';
import { GenresService } from './genres/genres.service.js';
import { TrackHistoryService } from './track-history/track-history.service.js';
import { TrackService } from './tracks/tacks.service.js';

type Config = {
  port: number
}

const config: Config = {
  port: 50010
}

;(async function main() {
  const prismaClient = new db.PrismaClient()

  console.debug('Loading fixtures...')
  await importFixtures(prismaClient)
  console.debug('Done loading fixtures!')

  const server = createServer()

  const artistService = new ArtistService(prismaClient)
  server.add(ArtistServiceDefinition, artistService)

  const trackService = new TrackService(prismaClient)
  server.add(TrackServiceDefinition, trackService)

  const trackHistoryService = new TrackHistoryService(prismaClient)
  server.add(TrackHistoryServiceDefinition, trackHistoryService)

  const genreService = new GenresService()
  server.add(GenresServiceDefinition, genreService)

  console.debug('Listening for incoming requests')
  await server.listen(`0.0.0.0:${config.port}`)
})()
