/* eslint-disable */
import Long from "long";
import { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";
import { SpotifyToken } from "./spotify.js";

export const protobufPackage = "user.v1";

export interface User {
  id: number;
  name: string;
  email: string;
  authToken: string;
}

export interface GetUserRequest {
  userId: number;
  email: string;
  authToken: string;
}

export interface ListUsersRequest {
}

export interface ListUsersResponse {
  users: User[];
  nextPageToken: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  spotifyToken: SpotifyToken | undefined;
}

function createBaseUser(): User {
  return { id: 0, name: "", email: "", authToken: "" };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.authToken !== "") {
      writer.uint32(34).string(message.authToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.email = reader.string();
          break;
        case 4:
          message.authToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
      authToken: isSet(object.authToken) ? String(object.authToken) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    message.authToken !== undefined && (obj.authToken = message.authToken);
    return obj;
  },

  fromPartial(object: DeepPartial<User>): User {
    const message = createBaseUser();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.authToken = object.authToken ?? "";
    return message;
  },
};

function createBaseGetUserRequest(): GetUserRequest {
  return { userId: 0, email: "", authToken: "" };
}

export const GetUserRequest = {
  encode(message: GetUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).uint64(message.userId);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.authToken !== "") {
      writer.uint32(26).string(message.authToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.authToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      email: isSet(object.email) ? String(object.email) : "",
      authToken: isSet(object.authToken) ? String(object.authToken) : "",
    };
  },

  toJSON(message: GetUserRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.email !== undefined && (obj.email = message.email);
    message.authToken !== undefined && (obj.authToken = message.authToken);
    return obj;
  },

  fromPartial(object: DeepPartial<GetUserRequest>): GetUserRequest {
    const message = createBaseGetUserRequest();
    message.userId = object.userId ?? 0;
    message.email = object.email ?? "";
    message.authToken = object.authToken ?? "";
    return message;
  },
};

function createBaseListUsersRequest(): ListUsersRequest {
  return {};
}

export const ListUsersRequest = {
  encode(_: ListUsersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUsersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ListUsersRequest {
    return {};
  },

  toJSON(_: ListUsersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ListUsersRequest>): ListUsersRequest {
    const message = createBaseListUsersRequest();
    return message;
  },
};

function createBaseListUsersResponse(): ListUsersResponse {
  return { users: [], nextPageToken: "" };
}

export const ListUsersResponse = {
  encode(message: ListUsersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.users.push(User.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListUsersResponse {
    return {
      users: Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListUsersResponse): unknown {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map((e) => e ? User.toJSON(e) : undefined);
    } else {
      obj.users = [];
    }
    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial(object: DeepPartial<ListUsersResponse>): ListUsersResponse {
    const message = createBaseListUsersResponse();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseCreateUserRequest(): CreateUserRequest {
  return { name: "", email: "", spotifyToken: undefined };
}

export const CreateUserRequest = {
  encode(message: CreateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.spotifyToken !== undefined) {
      SpotifyToken.encode(message.spotifyToken, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        case 4:
          message.spotifyToken = SpotifyToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateUserRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
      spotifyToken: isSet(object.spotifyToken) ? SpotifyToken.fromJSON(object.spotifyToken) : undefined,
    };
  },

  toJSON(message: CreateUserRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    message.spotifyToken !== undefined &&
      (obj.spotifyToken = message.spotifyToken ? SpotifyToken.toJSON(message.spotifyToken) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateUserRequest>): CreateUserRequest {
    const message = createBaseCreateUserRequest();
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.spotifyToken = (object.spotifyToken !== undefined && object.spotifyToken !== null)
      ? SpotifyToken.fromPartial(object.spotifyToken)
      : undefined;
    return message;
  },
};

export type UserServiceDefinition = typeof UserServiceDefinition;
export const UserServiceDefinition = {
  name: "UserService",
  fullName: "user.v1.UserService",
  methods: {
    getUser: {
      name: "GetUser",
      requestType: GetUserRequest,
      requestStream: false,
      responseType: User,
      responseStream: false,
      options: {},
    },
    listUsers: {
      name: "ListUsers",
      requestType: ListUsersRequest,
      requestStream: false,
      responseType: ListUsersResponse,
      responseStream: false,
      options: {},
    },
    createUser: {
      name: "CreateUser",
      requestType: CreateUserRequest,
      requestStream: false,
      responseType: User,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface UserServiceServiceImplementation<CallContextExt = {}> {
  getUser(request: GetUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<User>>;
  listUsers(request: ListUsersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListUsersResponse>>;
  createUser(request: CreateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<User>>;
}

export interface UserServiceClient<CallOptionsExt = {}> {
  getUser(request: DeepPartial<GetUserRequest>, options?: CallOptions & CallOptionsExt): Promise<User>;
  listUsers(request: DeepPartial<ListUsersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListUsersResponse>;
  createUser(request: DeepPartial<CreateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<User>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
