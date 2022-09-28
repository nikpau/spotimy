import type { ArtistID } from './artist.js'

export const web = {
  artist: (artist_id: ArtistID): URL => {
    return new URL(`/artist/${artist_id}`, 'https://open.spotify.com')
  }
}
