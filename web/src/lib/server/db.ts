import { PrismaClient, type SpotifyToken, type User } from '@prisma/client'

export const prisma = new PrismaClient()

export async function createUser(user: User, spotifyToken: SpotifyToken) {
  await prisma.user.create({
    data: {
      ...user,
      spotifyToken: {
        create: spotifyToken
      }
    }
  })
}
