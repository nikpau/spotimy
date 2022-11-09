import { PrismaClient, type Artist, type Track } from "@prisma/client";
import { createArtistFixtures } from "./artist.js";
import { createTrackFixtures } from "./tracks.js";

type Fixtures = {
  artists: Record<number, Artist>;
  tracks: Record<number, Track>;
  // history: History[];
};

export const fixtures: Fixtures = {
  artists: {},
  tracks: {},
  // history: [],
};

export async function importFixtures(client: PrismaClient) {
  // await prisma.trackHistory.deleteMany({ where: {} });
  await client.track.deleteMany({ where: {} });
  await client.artist.deleteMany({ where: {} });

  console.debug("Importing artist fixtures");
  const artists = await createArtistFixtures(client, 10);
  fixtures.artists = Object.fromEntries(
    artists.map((artist) => [artist.id, artist])
  );

  console.debug("Importing track fixtures");
  const tracks = await createTrackFixtures(client, 100);
  fixtures.tracks = Object.fromEntries(
    tracks.map((track) => [track.id, track])
  );

  // console.debug("Importing track history fixtures");
  // const history = await createTrackHistoryFixtures(prisma);
  // console.debug(`Created ${history.length} track history entries`);
}
