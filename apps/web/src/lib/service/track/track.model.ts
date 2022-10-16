import type { ArtistID } from '../artist/artist.model.js'
import type { Genre } from '../genre/genre.model.js'

export type Track = {
  name: string
  artist_id: ArtistID
  bpm: number | null
  genres: Genre[]
}
