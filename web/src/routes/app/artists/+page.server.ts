import { API } from '$lib/api/index.js'
import type { PageServerLoad } from './$types.js'

export const load: PageServerLoad = async (data) => {
  return {
    artists: await API.artists.list_my_artists()
  }
}
