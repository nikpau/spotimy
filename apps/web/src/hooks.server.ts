import type { Handle } from '@sveltejs/kit'
import { userService } from './lib/service/user/index.js'

export const handle: Handle = async ({ event, resolve }) => {
  const authToken = event.cookies.get('session')

  if (!authToken) {
    console.debug('Unauthenticated request')
    return await resolve(event)
  }

  const user = await userService.findByAuthToken(authToken)
  if (user) {
    console.debug('Authenticated request: ', user.id)
    event.locals.user_id = user.id
  }

  return resolve(event)
}
