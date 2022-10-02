import type { TrackHistory } from '$lib/api/history.js'
import { prisma } from '$lib/server/db.js'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async (data) => {
  const firstUser = await prisma.user.findFirst()

  const dbHistory = await prisma.trackHistory.findMany({
    where: {
      userId: firstUser!.id
    },
    include: {
      track: true
    }
  })

  const history: TrackHistory = dbHistory.map((entry) => ({
    track: {
      name: entry.track.title,
      artist_id: entry.track.artistId?.toString() ?? '',
      genres: [],
      bpm: entry.track.bpm
    },
    playedAt: entry.timestamp
  }))

  return {
    history,
    genres: ['Rock', 'Hip Hop', 'Pop']
  }
}
