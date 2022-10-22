import * as db from '@prisma/client';
import { ArtistServiceDefinition } from '@spotimy/api/music/artists/v1/artist.js';
import { createServer } from 'nice-grpc';
import { ArtistService } from './artists/artists.service.js';
import { importFixtures } from './fixtures/index.js';

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

  const artistService = new ArtistService(prismaClient)

  const server = createServer()
  server.add(ArtistServiceDefinition, artistService)

  console.debug('Listening for incoming requests')
  await server.listen(`0.0.0.0:${config.port}`)
})()
