/**
 * Track history API
 */
import { trackHistoryService, type TrackHistory } from '$lib/service/track-history/index.js'
import { userService } from '$lib/service/user/index.js'
import type { RequestHandler } from '@sveltejs/kit'

type DateString = string
type TrackHistoryGetParams = {
  start: DateString
  end: DateString
}

type TrackHistoryListResponse = {
  history: TrackHistory
}

export async function listHistory(start: Date, end: Date): Promise<TrackHistoryListResponse> {
  const me = await userService.me()
  if (me === null) throw new Error('Fail')

  const history = await trackHistoryService.list(me.id, start, end)

  return {
    history
  }
}

export const get: RequestHandler<TrackHistoryGetParams> = async (request) => {
  const { params } = request

  // Parse dates
  const start = new Date(params.start)
  const end = new Date(params.end)

  const response = listHistory(start, end)

  return new Response(JSON.stringify(response))
}
