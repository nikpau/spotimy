import { list_my_artists } from './artists.js'
import { get_token } from './auth.js'
import type { CreateUser, User } from './user.js'

export const API = {
  auth: {
    get_token
  },
  artists: {
    list_my_artists
  },
  user: {
    create: async (input: CreateUser): Promise<User> => {
      return {
        name: 'You Foo'
      }
    }
  }
}
