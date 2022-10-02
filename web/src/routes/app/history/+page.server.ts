import { genreService } from '$lib/service/genre/genre.service.js'
import { trackHistoryService } from '../../../lib/service/track-history/track-history.service.js'
import { userService } from '../../../lib/service/user/user.service.js'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  // const { history } = await listHistory(
  //   new Date(2020, 1, 1, 0, 0, 0),
  //   new Date(2028, 1, 1, 0, 0, 0)
  // )

  const me = await userService.me()
  const history = await trackHistoryService.list(me!.id, new Date(), undefined, 20, undefined)

  const genres = await genreService.list()

  return {
    history: history.results,
    next_page_token: history.next_page_token,
    genres
  }
}
