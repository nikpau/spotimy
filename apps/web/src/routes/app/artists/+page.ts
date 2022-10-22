import { artistClient } from '$lib/api.js'
import type { PageServerLoad } from './$types.js'

export const load: PageServerLoad = async (data) => {
	const response = await artistClient.listArtists({})
	return {
		artists: response.artists
	}
}
