import type { default as db } from '@prisma/client'
import { prisma } from '../../server/db.js'
import type { User } from './user.model.js'

export interface UserService {
  me: () => Promise<User | null>
  list: () => Promise<User[]>
}

export const userService: UserService = {
  // TODO: Actuall return the current user.
  me: async (): Promise<User | null> => {
    const user: db.User | null = await prisma.user.findFirst()
    if (!user) return null
    return toServiceModel(user)
  },
  list: async (): Promise<User[]> => {
    return []
  }
}

function toServiceModel(user: db.User): User {
  return {
    id: user.id,
    name: user.name ?? ''
  }
}
