import type { Artist } from '../spotify/artist.js'

export async function list_my_artists(): Promise<Artist[]> {
  return [
    {
      id: '6gto7HVNhu4ARE3P3g8Y5Y',
      name: 'Kollegah',
      genres: ['Hip Hop'],
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
      genres: ['Hip Hop'],
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5eb3478758807898edcbabb4557',
          width: 640
        }
      ],
      counts: {
        in_liked_songs: 8,
        in_playlists: 3
      }
    }
  ]
}
