import type { SpotifyToken } from '@prisma/client'
import { SpotifyWebApi } from 'spotify-web-api-ts'
import type { User } from '../service/user/user.model.js'

/// See: https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
export async function get_access_token(
  code: string,
  client_id: string,
  client_secret: string,
  redirect_uri: string
): Promise<SpotifyToken> {
  const auth = `${client_id}:${client_secret}`
  const authEncoded = Buffer.from(auth).toString('base64')

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${authEncoded}`
    },
    body: new URLSearchParams({
      code: code,
      redirect_uri,
      grant_type: 'authorization_code'
    })
  })

  if (!response.ok) throw new Error('Unable to retrieve access token')

  return response.json()
}

export async function get_user_profile_from_spotify(
  access_token: string
): Promise<Omit<User, 'id'>> {
  const spotify = new SpotifyWebApi({ accessToken: access_token })
  const response = await spotify.users.getMe()

  return {
    name: response.display_name || response.email || '',
    email: response.email
  }
}
