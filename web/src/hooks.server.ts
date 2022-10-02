import type { Handle } from '@sveltejs/kit'
import { importFixtures } from './fixtures/index.js'

importFixtures().then(() => console.debug('Successfully imported fixtures'))

export const handle: Handle = async ({ event, resolve }) => {
  let userid = event.cookies.get('userid')

  if (!userid) {
    // if this is the first time the user has visited this app,
    // set a cookie so that we recognise them when they return
    userid = crypto.randomUUID()
    event.cookies.set('userid', userid, { path: '/' })
  }

  event.locals.userid = userid

  return resolve(event)
}
