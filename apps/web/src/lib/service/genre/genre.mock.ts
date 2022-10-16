import type { GenreService } from './genre.service.js'

export const genresServiceMock: GenreService = {
  list: async () => {
    const genres = testTracks.map((track) => track.genres).flat()
    const genresSet = new Set(genres)
    return Array.from(genresSet.values())
  }
}
