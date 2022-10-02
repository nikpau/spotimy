import { prisma } from '$lib/server/db.js'
import { faker } from '@faker-js/faker'
import type { Artist } from '@prisma/client'

export async function createArtistFixtures(n: number): Promise<Artist[]> {
  const artists = []
  for (let i = 0; i < n; i++) {
    const new_artist = await prisma.artist.create({
      data: {
        name: faker.name.firstName()
      }
    })
    artists.push(new_artist)
  }
  return artists
}
