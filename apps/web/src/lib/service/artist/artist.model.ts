import type { Image } from './image.model.js'

export type ArtistID = string
export type Artist = {
  id: ArtistID
  name: string
  images: Image[]

  counts: ArtistCounts
}

export type ArtistCounts = {
  in_liked_songs: number
  in_playlists: number
}
