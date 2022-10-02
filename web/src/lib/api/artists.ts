import { prisma } from '$lib/server/db.js'

export type ArtistID = string
export type Artist = {
  id: ArtistID
  name: string
  images: Image[]

  counts: ArtistCounts
}

export type Image = {
  height: number
  width: number
  url: string
}

export type ArtistCounts = {
  in_liked_songs: number
  in_playlists: number
}

export type ArtistsService = {
  list_my_artists: () => Promise<Artist[]>
}

export const artistsService: ArtistsService = {
  list_my_artists: async (): Promise<Artist[]> => {
    const artists = await prisma.artist.findMany()
    return artists.map((a) => ({
      id: a.id.toString(),
      name: a.name,
      images: [],
      counts: {
        in_liked_songs: 1,
        in_playlists: 2
      }
    }))
  }
}

export const artistsServiceMock: ArtistsService = {
  list_my_artists: async (): Promise<Artist[]> => {
    return testArtists
  }
}

const testArtists: Artist[] = [
  {
    id: '6gto7HVNhu4ARE3P3g8Y5Y',
    name: 'Kollegah',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5ebb494fae4f401f799755ee2bd',
        width: 640
      }
    ],
    counts: {
      in_liked_songs: 14,
      in_playlists: 4
    }
  },
  {
    id: '7BSNHln0lSqyDHdQ3sv0Q5',
    name: 'Disarstar',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5eb3478758807898edcbabb4557',
        width: 640
      }
    ],
    counts: {
      in_liked_songs: 8,
      in_playlists: 7
    }
  }
]
