import type { Handle } from '@sveltejs/kit'
import { userClient } from './lib/api.js'

export const handle: Handle = async ({ event, resolve }) => {
	const authToken = event.cookies.get('session')

	if (!authToken) {
		console.debug('Unauthenticated request')
		return await resolve(event)
	}

	try {
		const user = await userClient.getUser({ authToken })
		console.debug('Authenticated request: ', user.id)
		event.locals.userId = user.id
		// eslint-disable-next-line no-empty
	} catch (error) {}

	return resolve(event)
}
