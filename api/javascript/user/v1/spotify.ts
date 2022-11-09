/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";

export const protobufPackage = "user.v1";

export interface SpotifyToken {
  accessToken: string;
  /** Unix timestamp (in seconds) in which the access token will expire. */
  expiresAt: number;
  tokenType: string;
  scopes: string[];
  refreshToken: string;
}

function createBaseSpotifyToken(): SpotifyToken {
  return { accessToken: "", expiresAt: 0, tokenType: "", scopes: [], refreshToken: "" };
}

export const SpotifyToken = {
  encode(message: SpotifyToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    if (message.expiresAt !== 0) {
      writer.uint32(16).int64(message.expiresAt);
    }
    if (message.tokenType !== "") {
      writer.uint32(26).string(message.tokenType);
    }
    for (const v of message.scopes) {
      writer.uint32(34).string(v!);
    }
    if (message.refreshToken !== "") {
      writer.uint32(42).string(message.refreshToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpotifyToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotifyToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accessToken = reader.string();
          break;
        case 2:
          message.expiresAt = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.tokenType = reader.string();
          break;
        case 4:
          message.scopes.push(reader.string());
          break;
        case 5:
          message.refreshToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpotifyToken {
    return {
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      expiresAt: isSet(object.expiresAt) ? Number(object.expiresAt) : 0,
      tokenType: isSet(object.tokenType) ? String(object.tokenType) : "",
      scopes: Array.isArray(object?.scopes) ? object.scopes.map((e: any) => String(e)) : [],
      refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "",
    };
  },

  toJSON(message: SpotifyToken): unknown {
    const obj: any = {};
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    message.expiresAt !== undefined && (obj.expiresAt = Math.round(message.expiresAt));
    message.tokenType !== undefined && (obj.tokenType = message.tokenType);
    if (message.scopes) {
      obj.scopes = message.scopes.map((e) => e);
    } else {
      obj.scopes = [];
    }
    message.refreshToken !== undefined && (obj.refreshToken = message.refreshToken);
    return obj;
  },

  fromPartial(object: DeepPartial<SpotifyToken>): SpotifyToken {
    const message = createBaseSpotifyToken();
    message.accessToken = object.accessToken ?? "";
    message.expiresAt = object.expiresAt ?? 0;
    message.tokenType = object.tokenType ?? "";
    message.scopes = object.scopes?.map((e) => e) || [];
    message.refreshToken = object.refreshToken ?? "";
    return message;
  },
};

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
