/* eslint-disable */
import Long from "long";
import { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";

export const protobufPackage = "music.tracks.v1";

export interface Track {
  name: number;
  artistId: string;
  bpm: number;
  genres: string[];
}

export interface ListTracksRequest {
  ids: string[];
}

export interface ListTracksResponse {
  tracks: Track[];
}

function createBaseTrack(): Track {
  return { name: 0, artistId: "", bpm: 0, genres: [] };
}

export const Track = {
  encode(message: Track, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== 0) {
      writer.uint32(8).int64(message.name);
    }
    if (message.artistId !== "") {
      writer.uint32(18).string(message.artistId);
    }
    if (message.bpm !== 0) {
      writer.uint32(24).int32(message.bpm);
    }
    for (const v of message.genres) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Track {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrack();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.artistId = reader.string();
          break;
        case 3:
          message.bpm = reader.int32();
          break;
        case 4:
          message.genres.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Track {
    return {
      name: isSet(object.name) ? Number(object.name) : 0,
      artistId: isSet(object.artistId) ? String(object.artistId) : "",
      bpm: isSet(object.bpm) ? Number(object.bpm) : 0,
      genres: Array.isArray(object?.genres) ? object.genres.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Track): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = Math.round(message.name));
    message.artistId !== undefined && (obj.artistId = message.artistId);
    message.bpm !== undefined && (obj.bpm = Math.round(message.bpm));
    if (message.genres) {
      obj.genres = message.genres.map((e) => e);
    } else {
      obj.genres = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Track>): Track {
    const message = createBaseTrack();
    message.name = object.name ?? 0;
    message.artistId = object.artistId ?? "";
    message.bpm = object.bpm ?? 0;
    message.genres = object.genres?.map((e) => e) || [];
    return message;
  },
};

function createBaseListTracksRequest(): ListTracksRequest {
  return { ids: [] };
}

export const ListTracksRequest = {
  encode(message: ListTracksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTracksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTracksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListTracksRequest {
    return { ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => String(e)) : [] };
  },

  toJSON(message: ListTracksRequest): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListTracksRequest>): ListTracksRequest {
    const message = createBaseListTracksRequest();
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseListTracksResponse(): ListTracksResponse {
  return { tracks: [] };
}

export const ListTracksResponse = {
  encode(message: ListTracksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tracks) {
      Track.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTracksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTracksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tracks.push(Track.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListTracksResponse {
    return { tracks: Array.isArray(object?.tracks) ? object.tracks.map((e: any) => Track.fromJSON(e)) : [] };
  },

  toJSON(message: ListTracksResponse): unknown {
    const obj: any = {};
    if (message.tracks) {
      obj.tracks = message.tracks.map((e) => e ? Track.toJSON(e) : undefined);
    } else {
      obj.tracks = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListTracksResponse>): ListTracksResponse {
    const message = createBaseListTracksResponse();
    message.tracks = object.tracks?.map((e) => Track.fromPartial(e)) || [];
    return message;
  },
};

export type TrackServiceDefinition = typeof TrackServiceDefinition;
export const TrackServiceDefinition = {
  name: "TrackService",
  fullName: "music.tracks.v1.TrackService",
  methods: {
    listTracks: {
      name: "ListTracks",
      requestType: ListTracksRequest,
      requestStream: false,
      responseType: ListTracksResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface TrackServiceServiceImplementation<CallContextExt = {}> {
  listTracks(
    request: ListTracksRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListTracksResponse>>;
}

export interface TrackServiceClient<CallOptionsExt = {}> {
  listTracks(
    request: DeepPartial<ListTracksRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListTracksResponse>;
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
