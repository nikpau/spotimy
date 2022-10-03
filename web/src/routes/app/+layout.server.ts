import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types.js'

export const load: LayoutServerLoad = async ({ locals }) => {
  if (!locals.user_id) {
    console.debug('ALARM, unauthenticated user')
    throw redirect(302, '/login')
  }
}
