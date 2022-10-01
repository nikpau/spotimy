import { testTracks } from '$lib/api/tracks.js'

export type Genre = string

interface GenreService {
  list(): Promise<Genre[]>
}

export const genresServiceMock: GenreService = {
  list: async () => {
    const genres = testTracks.map((track) => track.genres).flat()
    const genresSet = new Set(genres)
    return Array.from(genresSet.values())
  }
}
