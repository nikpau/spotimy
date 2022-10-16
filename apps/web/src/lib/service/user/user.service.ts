import type { default as db, SpotifyToken } from '@prisma/client'
import { prisma } from '../../server/db.js'
import type { User } from './user.model.js'

export interface UserService {
  me: () => Promise<User | null>
  list: () => Promise<User[]>
  create: (user: db.Prisma.UserCreateInput, spotify_token: SpotifyToken) => Promise<User>
  findById: (id: number) => Promise<User | null>
  findByAuthToken: (authToken: string) => Promise<User | null>
  findByEmail: (email: string) => Promise<User | null>
}

export const userService: UserService = {
  // TODO: Actually return the current user.
  me: async (): Promise<User | null> => {
    const user: db.User | null = await prisma.user.findFirst()
    if (!user) return null
    return toServiceModel(user)
  },
  list: async (): Promise<User[]> => {
    return []
  },
  create: async (user: db.Prisma.UserCreateInput, spotify_token: SpotifyToken): Promise<User> => {
    const new_user = await prisma.user.create({
      data: {
        ...user,
        authToken: crypto.randomUUID(),
        spotifyToken: {
          create: spotify_token
        }
      }
    })
    return toServiceModel(new_user)
  },
  findById: async function (id: number): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        id
      }
    })
    return toServiceModel(user)
  },
  findByAuthToken: async function (authToken: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        authToken: authToken
      }
    })
    return toServiceModel(user)
  },
  findByEmail: async function (email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        email: email
      }
    })
    return toServiceModel(user)
  }
}

function toServiceModel(user: db.User): User
function toServiceModel(user: db.User | null): User | null

function toServiceModel(user: db.User | null): User | null {
  if (user === null) return null
  return {
    id: user.id,
    name: user.name ?? '',
    email: user.email ?? '',
    authToken: user.authToken
  }
}
