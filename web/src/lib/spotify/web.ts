import type { ArtistID } from '$lib/service/artist/index.js'

export const spotifyWeb = {
  artist: (artist_id: ArtistID): string => {
    return `https://open.spotify.com/artist/${artist_id}`
  }
}
