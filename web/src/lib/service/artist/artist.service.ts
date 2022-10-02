import { prisma } from '$lib/server/db.js'
import type { Artist } from './artist.model.js'

export type ArtistsService = {
  list_my_artists: () => Promise<Artist[]>
}

export const artistsService: ArtistsService = {
  list_my_artists: async (): Promise<Artist[]> => {
    const artists = await prisma.artist.findMany()
    return artists.map((a) => ({
      id: a.id.toString(),
      name: a.name,
      images: [],
      counts: {
        in_liked_songs: 1,
        in_playlists: 2
      }
    }))
  }
}
