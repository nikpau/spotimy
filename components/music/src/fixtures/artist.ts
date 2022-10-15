import { faker } from "@faker-js/faker";
import type { Artist, PrismaClient } from "@prisma/client";

export async function createArtistFixtures(
  client: PrismaClient,
  n: number
): Promise<Artist[]> {
  const artists = [];
  for (let i = 0; i < n; i++) {
    const new_artist = await client.artist.create({
      data: {
        name: faker.name.firstName(),
      },
    });
    artists.push(new_artist);
  }
  return artists;
}
