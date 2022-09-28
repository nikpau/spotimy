import type { Image } from './image.js'
import type { Genre, SpotifyIdentifier } from './types.js'

export type ArtistID = SpotifyIdentifier
export type Artist = {
  id: ArtistID
  name: string
  genres: Genre[]
  images: Image[]

  counts: ArtistCounts
}

export type ArtistCounts = {
  in_liked_songs: number
  in_playlists: number
}
