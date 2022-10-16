/* eslint-disable */
import { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";

export const protobufPackage = "music.genres.v1";

export interface Genre {
  name: string;
}

export interface ListGenresRequest {
}

export interface ListGenresResponse {
  genres: Genre[];
}

function createBaseGenre(): Genre {
  return { name: "" };
}

export const Genre = {
  encode(message: Genre, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Genre {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenre();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Genre {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: Genre): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<Genre>): Genre {
    const message = createBaseGenre();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListGenresRequest(): ListGenresRequest {
  return {};
}

export const ListGenresRequest = {
  encode(_: ListGenresRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGenresRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGenresRequest();
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

  fromJSON(_: any): ListGenresRequest {
    return {};
  },

  toJSON(_: ListGenresRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ListGenresRequest>): ListGenresRequest {
    const message = createBaseListGenresRequest();
    return message;
  },
};

function createBaseListGenresResponse(): ListGenresResponse {
  return { genres: [] };
}

export const ListGenresResponse = {
  encode(message: ListGenresResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.genres) {
      Genre.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGenresResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGenresResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.genres.push(Genre.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListGenresResponse {
    return { genres: Array.isArray(object?.genres) ? object.genres.map((e: any) => Genre.fromJSON(e)) : [] };
  },

  toJSON(message: ListGenresResponse): unknown {
    const obj: any = {};
    if (message.genres) {
      obj.genres = message.genres.map((e) => e ? Genre.toJSON(e) : undefined);
    } else {
      obj.genres = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListGenresResponse>): ListGenresResponse {
    const message = createBaseListGenresResponse();
    message.genres = object.genres?.map((e) => Genre.fromPartial(e)) || [];
    return message;
  },
};

export type GenresServiceDefinition = typeof GenresServiceDefinition;
export const GenresServiceDefinition = {
  name: "GenresService",
  fullName: "music.genres.v1.GenresService",
  methods: {
    listGenres: {
      name: "ListGenres",
      requestType: ListGenresRequest,
      requestStream: false,
      responseType: ListGenresResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface GenresServiceServiceImplementation<CallContextExt = {}> {
  listGenres(
    request: ListGenresRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListGenresResponse>>;
}

export interface GenresServiceClient<CallOptionsExt = {}> {
  listGenres(
    request: DeepPartial<ListGenresRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListGenresResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
