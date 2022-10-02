import type { Genre } from '$lib/api/genre.js'
import type { ArtistID } from './artists.js'

export type Track = {
  name: string
  artist_id: ArtistID
  bpm: number | null
  genres: Genre[]
}

export const testTracks: Track[] = [
  {
    name: 'Song 1',
    artist_id: 'something',
    bpm: 123,
    genres: ['Pop']
  },
  {
    name: 'Song 2',
    artist_id: 'something',
    bpm: 90,
    genres: ['Hip Hop']
  },
  {
    name: 'Song 3',
    artist_id: 'something',
    bpm: 140,
    genres: ['Pop']
  },
  {
    name: 'Song 4',
    artist_id: 'something',
    bpm: 81,
    genres: ['Pop', 'Hip Hop']
  },
  {
    name: 'Song 5',
    artist_id: 'something',
    bpm: 110,
    genres: ['Rock']
  }
]
