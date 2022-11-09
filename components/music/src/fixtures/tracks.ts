import { faker } from '@faker-js/faker'
import type { PrismaClient, Track } from '@prisma/client'
import { fixtures } from './index.js'
import { randomNumberInRange } from './utils.js'

export async function createTrackFixtures(client: PrismaClient, n: number): Promise<Track[]> {
  const tracks: Track[] = []

  for (let i = 0; i < n; i++) {
    const new_track = await client.track.create({
      data: {
        title: faker.music.songName(),
        artistId: faker.helpers.objectValue(fixtures.artists).id,
        bpm: randomNumberInRange(80, 160)
      }
    })
    tracks.push(new_track)
  }
  return tracks
}
