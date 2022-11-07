import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
	console.debug(`Fetch track history for user ${locals.userId}`)

	return {
    userId: locals.userId
	}
}
