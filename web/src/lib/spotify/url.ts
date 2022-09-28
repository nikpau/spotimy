import { CLIENT_ID, REDIRECT_URI, SCOPES } from './config.js'

const AUTHORIZE_URL = 'https://accounts.spotify.com/authorize'

export function getAuthorizeUrl(): URL {
  const url = new URL(AUTHORIZE_URL)

  url.searchParams.set('client_id', CLIENT_ID)
  url.searchParams.set('scope', SCOPES.join(' '))
  url.searchParams.set('redirect_uri', REDIRECT_URI)
  url.searchParams.set('response_type', 'code')

  return url
}
