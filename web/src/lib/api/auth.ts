import type { SpotifyAuth } from '../spotify/auth.js'

export async function get_token(
  code: string,
  client_id: string,
  client_secret: string,
  redirect_uri: string
): Promise<SpotifyAuth> {
  const auth = `${client_id}:${client_secret}`
  const authEncoded = Buffer.from(auth).toString('base64')

  const payload = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: redirect_uri
  })

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${authEncoded}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: payload
  })
  if (!response.ok) throw new Error('Failed to fetch tokens from spotify')

  return response.json()
}
