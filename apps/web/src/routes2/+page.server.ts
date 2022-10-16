import { createConnectTransport, createPromiseClient } from '@bufbuild/connect-web'
import { ArtistService } from '@spotimy/api-web/music/artists/v1/artist_connectweb.js'
import type { Artist } from '@spotimy/api-web/music/artists/v1/artist_pb.js'
import type { PageServerLoad } from './$types'

const transport = createConnectTransport({
  baseUrl: 'http://localhost:50002'
})
const client = createPromiseClient(ArtistService, transport)

const dummyArtist: Partial<Artist> = {
  id: '1',
  name: 'Peter',
  images: []
}

export const load: PageServerLoad = async () => {
  const { artists } = await client.listArtists({
    query: 'Kollegah'
  })

  return {
    artists: artists
    // artists: [dummyArtist]
  }
}
