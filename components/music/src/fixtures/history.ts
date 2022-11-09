import type { PrismaClient, TrackHistory } from "@prisma/client";

export async function createTrackHistoryFixtures(
  client: PrismaClient
): Promise<TrackHistory[]> {
  // const start = DateTime.now()
  // const trackHistory: TrackHistory[] = []

  // for (const user of Object.values(fixtures.users)) {
  //   const historyLength = randomNumberInRange(200, 500)
  //   let offsetInMinutes = 0

  //   for (let i = 0; i < historyLength; i++) {
  //     const entry = await client.trackHistory.create({
  //       data: {
  //         trackId: faker.helpers.objectValue(fixtures.tracks).id,
  //         userId: user.id,
  //         timestamp: start.minus({ minutes: offsetInMinutes }).toJSDate()
  //       }
  //     })
  //     console.debug(entry)
  //     offsetInMinutes += randomNumberInRange(3, 10)
  //     trackHistory.push(entry)
  //   }
  // }

  // return trackHistory
  return [];
}
