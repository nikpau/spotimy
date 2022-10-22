import { Scope } from './scopes.js'

export const CLIENT_ID: string = import.meta.env.VITE_SPOTIPY_CLIENT_ID
export const CLIENT_SECRET: string = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET

// Has to be added to the spotify app dashboard.
export const REDIRECT_URI = 'http://localhost:5173/spotify/callback'

export const SCOPES: Scope[] = [Scope.UserLibraryRead, Scope.UserReadEmail]
