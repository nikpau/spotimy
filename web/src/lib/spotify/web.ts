import type { ArtistID } from '../api/artists.js'

export const spotifyWeb = {
  artist: (artist_id: ArtistID): string => {
    return `https://open.spotify.com/artist/${artist_id}`
  }
}
