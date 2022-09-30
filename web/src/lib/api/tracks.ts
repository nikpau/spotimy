import type { ArtistID } from './artists.js'

export type Track = {
  name: string
  artist_id: ArtistID
  bpm: number
}

export const testTracks = [
  {
    name: 'Song 1',
    artist_id: 'something',
    bpm: 123
  },
  {
    name: 'Song 2',
    artist_id: 'something',
    bpm: 90
  },
  {
    name: 'Song 3',
    artist_id: 'something',
    bpm: 140
  },
  {
    name: 'Song 4',
    artist_id: 'something',
    bpm: 81
  },
  {
    name: 'Song 5',
    artist_id: 'something',
    bpm: 110
  }
]
