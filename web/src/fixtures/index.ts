import { PrismaClient, type Artist, type Track, type User } from '@prisma/client'
import { createArtistFixtures } from './artist.js'
import { createTrackHistoryFixtures } from './history.js'
import { createTrackFixtures } from './tracks.js'
import { createUserFixtures } from './user.js'

type Fixtures = {
  users: Record<number, User>
  artists: Record<number, Artist>
  tracks: Record<number, Track>
  history: History[]
}

export const fixtures: Fixtures = {
  users: {},
  artists: {},
  tracks: {},
  history: []
}

export async function importFixtures() {
  const prisma = new PrismaClient()

  await prisma.trackHistory.deleteMany({ where: {} })
  await prisma.track.deleteMany({ where: {} })
  await prisma.artist.deleteMany({ where: {} })
  await prisma.spotifyToken.deleteMany({ where: {} })
  await prisma.user.deleteMany({ where: {} })

  console.debug('Importing user fixtures')
  const users = await createUserFixtures(5)
  fixtures.users = Object.fromEntries(users.map((user) => [user.id, user]))

  console.debug('Importing artist fixtures')
  const artists = await createArtistFixtures(10)
  fixtures.artists = Object.fromEntries(artists.map((artist) => [artist.id, artist]))

  console.debug('Importing track fixtures')
  const tracks = await createTrackFixtures(prisma, 100)
  fixtures.tracks = Object.fromEntries(tracks.map((track) => [track.id, track]))

  console.debug('Importing track history fixtures')
  const history = await createTrackHistoryFixtures(prisma)
  console.debug(`Created ${history.length} track history entries`)
}
