import { genreService } from '$lib/service/genre/genre.service.js'
import type { PageServerLoad } from './$types'
import { listHistory } from './+server.js'

export const load: PageServerLoad = async () => {
  const { history } = await listHistory(
    new Date(2020, 1, 1, 0, 0, 0),
    new Date(2028, 1, 1, 0, 0, 0)
  )
  const genres = await genreService.list()

  return {
    history,
    genres
  }
}
