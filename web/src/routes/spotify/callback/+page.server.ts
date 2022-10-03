import { error } from '@sveltejs/kit'
import { CLIENT_SECRET } from '../../../lib/server/config.js'
import type { User } from '../../../lib/service/user/index.js'
import { userService } from '../../../lib/service/user/user.service.js'
import { get_access_token, get_user_profile_from_spotify } from '../../../lib/spotify/auth.js'
import { CLIENT_ID, REDIRECT_URI } from '../../../lib/spotify/config.js'
import type { PageServerLoad } from './$types.js'

export const load: PageServerLoad = async ({ url, cookies }) => {
  console.debug('Spotify callback page load')
  const code = url.searchParams.get('code')
  if (!code) throw error(401, 'Not authorized')

  const token = await get_access_token(code, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
  const profile = await get_user_profile_from_spotify(token.access_token)

  let user: User | null = null

  // Try to find user first.
  if (profile.email) {
    user = await userService.findByEmail(profile.email)
    console.debug('Found user by email')
  }

  // If not found, create a new one.
  if (user === null) {
    user = await userService.create(profile, token)
    console.debug('New user registered: ', user)
  }

  cookies.set('session', user.authToken!, {
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
