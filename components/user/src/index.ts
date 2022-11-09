import * as db from '@prisma/client';
import { UserServiceDefinition } from '@spotimy/api/user/v1/user.js';
import * as fs from 'fs';
import { createServer } from 'nice-grpc';
import { ServerReflection, ServerReflectionService } from 'nice-grpc-server-reflection';
import * as path from 'path';
import { importFixtures } from './fixtures/index.js';
import { UserService } from './user.service.js';

type Config = {
  port: number
}

const config: Config = {
  port: 50012
}

const workspaceRoot = path.normalize(path.join(process.cwd(), "..", ".."));

;(async function main() {
  const prismaClient = new db.PrismaClient()

  console.debug('Loading fixtures...')
  await importFixtures(prismaClient)
  console.debug('Done loading fixtures!')

  const userService = new UserService(prismaClient)

  const server = createServer()
  server.add(UserServiceDefinition, userService)
  server.add(
  ServerReflectionService,
  ServerReflection(
    fs.readFileSync(path.join(workspaceRoot, 'api', 'protoset.bin')),
    [UserServiceDefinition.fullName],
  ),
);

  console.debug('Listening for incoming requests')
  await server.listen(`0.0.0.0:${config.port}`)
})()
