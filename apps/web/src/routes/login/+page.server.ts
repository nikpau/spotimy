import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user_id) {
		return {
			status: 302,
			redirect: '/app/artists'
		}
	}
}
