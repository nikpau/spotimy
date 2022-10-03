import { genreService } from '$lib/service/genre/genre.service.js'
import { trackHistoryService } from '$lib/service/track-history/track-history.service.js'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
  console.debug(`Fetch track history for user ${locals.user_id}`)
  const history = await trackHistoryService.list(
    locals.user_id,
    new Date(),
    undefined,
    20,
    undefined
  )

  const genres = await genreService.list()

  return {
    history: history.results,
    next_page_token: history.next_page_token,
    genres
  }
}
