import { error } from '@sveltejs/kit'
import { API } from '../../lib/api/index.js'
import { CLIENT_SECRET } from '../../lib/server/secrets.js'
import { CLIENT_ID, REDIRECT_URI } from '../../lib/spotify/config.js'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ url }) => {
  const code = url.searchParams.get('code')
  if (!code) throw error(401, 'Not authorized')

  const auth = await API.auth.get_token(code, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)

  return {
    auth
  }
}
