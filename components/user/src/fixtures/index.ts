import type { default as db } from "@prisma/client";
import { createUserFixtures } from "./user.fixtures.js";

type Fixtures = {
  users: Record<number, db.User>;
};

export const fixtures: Fixtures = {
  users: {}
};

export async function importFixtures(client: db.PrismaClient) {
  await client.user.deleteMany({ where: {} });

  console.debug("Importing user fixtures");
  const users = await createUserFixtures(client, 10);
  fixtures.users = Object.fromEntries(
    users.map((user) => [user.id, user])
  );
}
