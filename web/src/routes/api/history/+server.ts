/**
 * Track history API
 */

import { trackHistoryService } from '$lib/service/track-history/track-history.service.js'
import { userService } from '$lib/service/user/index.js'
import type { RequestHandler } from '@sveltejs/kit'
import base64url from 'base64url'

type DateString = string
type TrackHistoryGetParams = {
  start?: DateString
  end?: DateString
  limit: string
  page_token: string
}

export const GET: RequestHandler<TrackHistoryGetParams> = async (request) => {
  const me = await userService.me()
  if (me === null) throw new Error('Fail')

  const params = request.url.searchParams

  const limitString = params.get('limit')
  const limit = limitString ? parseInt(limitString) : 20

  const cursorString = params.get('page_token')
  const cursor = cursorString ? new Date(parseInt(base64url.decode(cursorString))) : undefined
  console.debug('Get user track history', { limit, cursor })

  const history = await trackHistoryService.list(me.id, undefined, undefined, limit, cursor)
  console.debug(`Found ${history.results.length} history entries`)

  return new Response(JSON.stringify(history))
}
