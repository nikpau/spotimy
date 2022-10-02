import { prisma } from '$lib/server/db.js'
import { faker } from '@faker-js/faker'
import type { User } from '@prisma/client'

export async function createUserFixtures(n: number): Promise<User[]> {
  const users: User[] = []
  for (let i = 0; i < n; i++) {
    const new_user = await prisma.user.create({
      data: {
        name: faker.name.fullName(),
        email: faker.internet.email()
      }
    })
    users.push(new_user)
  }
  return users
}
