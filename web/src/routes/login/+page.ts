import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = async (data) => {
  const code = data.url.searchParams.get('code')
  if (!code) throw error(401, 'Not authorized')

  return {
    code
  }
}
