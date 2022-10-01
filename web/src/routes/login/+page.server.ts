import { CLIENT_SECRET } from '$lib/server/config.js'
import { createUser } from '$lib/server/db.js'
import { get_access_token } from '$lib/spotify/auth.js'
import { CLIENT_ID, REDIRECT_URI } from '$lib/spotify/config.js'
import type { User } from '@prisma/client'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async (data) => {
  const code = data.url.searchParams.get('code')
  if (!code) throw error(401, 'Not authorized')

  const token = await get_access_token(code, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)

  const user: User = {
    id: 1,
    name: 'Nick',
    email: 'nick@lehmann.sh'
  }

  await createUser(user, token)

  return {
    code
  }
}
