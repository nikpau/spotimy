import type { SpotifyToken } from '@spotimy/api-web/user/v1/spotify_pb.js'
import { User } from '@spotimy/api-web/user/v1/user_pb.js'
import { SpotifyWebApi } from 'spotify-web-api-ts'

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

	if (!response.ok) throw new Error(`Unable to retrieve access token: ${await response.text()}`)

	return response.json()
}

export async function get_user_profile_from_spotify(
	accessToken: string
): Promise<Omit<User, 'id'>> {
	const spotify = new SpotifyWebApi({ accessToken })
	const response = await spotify.users.getMe()

	return new User({
		name: response.display_name || response.email || '',
		email: response.email || ''
	})
}
