import type { Genre } from './genre.model.js'

export interface GenreService {
  list(): Promise<Genre[]>
}

export const genreService: GenreService = {
  list: async (): Promise<Genre[]> => {
    return ['Rock', 'Hip Hop', 'Pop']
  }
}
