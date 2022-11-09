import { Code, ConnectError } from '@bufbuild/connect-web'
import type { User } from '@spotimy/api-web/user/v1/user_pb.js'
import { error } from '@sveltejs/kit'
import { userClient } from '../../../lib/api.js'
import { get_access_token } from '../../../lib/spotify/auth.js'
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from '../../../lib/spotify/config.js'
import type { PageServerLoad } from './$types.js'

export const load: PageServerLoad = async ({ url, cookies }) => {
	console.debug('Spotify callback page load')
	const code = url.searchParams.get('code')
	if (!code) throw error(401, 'Not authorized')

	console.debug({ CLIENT_SECRET })

	const token = await get_access_token(code, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
	console.debug('User authenticated', { token })

	// const profile = await get_user_profile_from_spotify(token.accessToken)
	const email = 'nick@lehmann.sh'

	let user: User | null = null

	// Try to find user first.
	if (email) {
		try {
			user = await userClient.getUser({ email })
			console.debug('Found user by email')
		} catch (error) {
			if (error instanceof ConnectError) {
				if (error.code === Code.NotFound) {
					console.debug('User does not exist yet')
				} else {
					throw Error(
						`Failed to check if user is alreay registered: ${error.code} ${error.message}`
					)
				}
			}
		}
	}

	// If not found, create a new one.
	if (user === null) {
		console.debug('Creating new user')
		user = await userClient.createUser({ email: email })
		console.debug('New user registered: ', user)
	}

	cookies.set('session', user.authToken, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		secure: false,
		maxAge: 30 * 24 * 60 * 60 // one month
	})

	return {
		success: true
	}
}
