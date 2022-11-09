/* eslint-disable */
import Long from "long";
import { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";
import { Track } from "./track.js";

export const protobufPackage = "music.tracks.v1";

export interface TrackHistoryEntry {
  track: Track | undefined;
  timestamp: number;
}

export interface ListTrackHistoryRequest {
  userId: number;
  start: number;
  end: number;
  limit: number;
  pageToken: string;
}

export interface ListTrackHistoryResponse {
  entries: TrackHistoryEntry[];
  nextPageToken: string;
}

function createBaseTrackHistoryEntry(): TrackHistoryEntry {
  return { track: undefined, timestamp: 0 };
}

export const TrackHistoryEntry = {
  encode(message: TrackHistoryEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.track !== undefined) {
      Track.encode(message.track, writer.uint32(10).fork()).ldelim();
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TrackHistoryEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrackHistoryEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.track = Track.decode(reader, reader.uint32());
          break;
        case 2:
          message.timestamp = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TrackHistoryEntry {
    return {
      track: isSet(object.track) ? Track.fromJSON(object.track) : undefined,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: TrackHistoryEntry): unknown {
    const obj: any = {};
    message.track !== undefined && (obj.track = message.track ? Track.toJSON(message.track) : undefined);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },

  fromPartial(object: DeepPartial<TrackHistoryEntry>): TrackHistoryEntry {
    const message = createBaseTrackHistoryEntry();
    message.track = (object.track !== undefined && object.track !== null) ? Track.fromPartial(object.track) : undefined;
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseListTrackHistoryRequest(): ListTrackHistoryRequest {
  return { userId: 0, start: 0, end: 0, limit: 0, pageToken: "" };
}

export const ListTrackHistoryRequest = {
  encode(message: ListTrackHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).uint64(message.userId);
    }
    if (message.start !== 0) {
      writer.uint32(16).int64(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(24).int64(message.end);
    }
    if (message.limit !== 0) {
      writer.uint32(32).int32(message.limit);
    }
    if (message.pageToken !== "") {
      writer.uint32(42).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTrackHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTrackHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.start = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.end = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.limit = reader.int32();
          break;
        case 5:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListTrackHistoryRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      start: isSet(object.start) ? Number(object.start) : 0,
      end: isSet(object.end) ? Number(object.end) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
    };
  },

  toJSON(message: ListTrackHistoryRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial(object: DeepPartial<ListTrackHistoryRequest>): ListTrackHistoryRequest {
    const message = createBaseListTrackHistoryRequest();
    message.userId = object.userId ?? 0;
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    message.limit = object.limit ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseListTrackHistoryResponse(): ListTrackHistoryResponse {
  return { entries: [], nextPageToken: "" };
}

export const ListTrackHistoryResponse = {
  encode(message: ListTrackHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      TrackHistoryEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTrackHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTrackHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(TrackHistoryEntry.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListTrackHistoryResponse {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => TrackHistoryEntry.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListTrackHistoryResponse): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? TrackHistoryEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial(object: DeepPartial<ListTrackHistoryResponse>): ListTrackHistoryResponse {
    const message = createBaseListTrackHistoryResponse();
    message.entries = object.entries?.map((e) => TrackHistoryEntry.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

export type TrackHistoryServiceDefinition = typeof TrackHistoryServiceDefinition;
export const TrackHistoryServiceDefinition = {
  name: "TrackHistoryService",
  fullName: "music.tracks.v1.TrackHistoryService",
  methods: {
    listTrackHistory: {
      name: "ListTrackHistory",
      requestType: ListTrackHistoryRequest,
      requestStream: false,
      responseType: ListTrackHistoryResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface TrackHistoryServiceServiceImplementation<CallContextExt = {}> {
  listTrackHistory(
    request: ListTrackHistoryRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListTrackHistoryResponse>>;
}

export interface TrackHistoryServiceClient<CallOptionsExt = {}> {
  listTrackHistory(
    request: DeepPartial<ListTrackHistoryRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListTrackHistoryResponse>;
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
