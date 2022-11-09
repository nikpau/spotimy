import type { default as db } from '@prisma/client';
import {
  CreateUserRequest, GetUserRequest, ListUsersRequest, ListUsersResponse, User as APIUser,
  UserServiceServiceImplementation
} from '@spotimy/api/user/v1/user.js';
import * as crypto from 'crypto';
import { CallContext, ServerError, Status } from 'nice-grpc';

type User = APIUser;

export class UserService implements UserServiceServiceImplementation {
  constructor(
    private readonly storage: db.PrismaClient
  ) {}

  async getUser(request: GetUserRequest, context: CallContext): Promise<User> {
    if (request.userId === 0 && request.email === '' && request.authToken === '') 
      throw new ServerError(
        Status.INVALID_ARGUMENT,
        'Either userId, email or authToken must be provided'
      )

    const args: db.Prisma.UserFindManyArgs = {}
    if (request.userId) args.where = { id : request.userId }
    if (request.email) args.where = { email : request.email }
    if (request.authToken) args.where = { authToken : request.authToken }

    const user = await this.storage.user.findFirst(args)
    if (!user) throw new ServerError(Status.NOT_FOUND, 'User not found')

    return toServiceModel(user)
  }

  async listUsers(request: ListUsersRequest, context: CallContext): Promise<ListUsersResponse> {
    const users = await this.storage.user.findMany({})

    return {
      users: users.map(user => toServiceModel(user)),
      nextPageToken: ''
    }
  }

  async createUser(request: CreateUserRequest, context: CallContext): Promise<User> {
    // if (!request.name) throw new ServerError(Status.INVALID_ARGUMENT, 'Name is required')
    const authToken = crypto.randomUUID()

    // TODO: Add error handling.
    const user = await this.storage.user.create({
      data: {
        ...request,
        authToken: authToken
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
    authToken: user.authToken!
  }
}
