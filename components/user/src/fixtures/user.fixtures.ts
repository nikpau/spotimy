import { faker } from '@faker-js/faker'
import { PrismaClient, User } from '@prisma/client'

export async function createUserFixtures(prismaClient: PrismaClient, n: number): Promise<User[]> {
  const users: User[] = []
  for (let i = 0; i < n; i++) {
    const new_user = await prismaClient.user.create({
      data: {
        name: faker.name.fullName(),
        email: faker.internet.email()
      }
    })
    users.push(new_user)
  }

  return users
}
