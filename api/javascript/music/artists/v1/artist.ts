/* eslint-disable */
import { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";

export const protobufPackage = "music.artists.v1";

export interface Artist {
  id: string;
  name: string;
  images: Image[];
  counts: ArtistCounts | undefined;
}

export interface Image {
  url: string;
  width: number;
  height: number;
}

export interface ArtistCounts {
  inLikedSongs: number;
  inPlaylists: number;
}

export interface ListArtistsRequest {
  query: string;
}

export interface ListArtistsResponse {
  artists: Artist[];
}

function createBaseArtist(): Artist {
  return { id: "", name: "", images: [], counts: undefined };
}

export const Artist = {
  encode(message: Artist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.images) {
      Image.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.counts !== undefined) {
      ArtistCounts.encode(message.counts, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Artist {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArtist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.images.push(Image.decode(reader, reader.uint32()));
          break;
        case 4:
          message.counts = ArtistCounts.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Artist {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      images: Array.isArray(object?.images) ? object.images.map((e: any) => Image.fromJSON(e)) : [],
      counts: isSet(object.counts) ? ArtistCounts.fromJSON(object.counts) : undefined,
    };
  },

  toJSON(message: Artist): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    if (message.images) {
      obj.images = message.images.map((e) => e ? Image.toJSON(e) : undefined);
    } else {
      obj.images = [];
    }
    message.counts !== undefined && (obj.counts = message.counts ? ArtistCounts.toJSON(message.counts) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Artist>): Artist {
    const message = createBaseArtist();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.images = object.images?.map((e) => Image.fromPartial(e)) || [];
    message.counts = (object.counts !== undefined && object.counts !== null)
      ? ArtistCounts.fromPartial(object.counts)
      : undefined;
    return message;
  },
};

function createBaseImage(): Image {
  return { url: "", width: 0, height: 0 };
}

export const Image = {
  encode(message: Image, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.width !== 0) {
      writer.uint32(16).int32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(24).int32(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Image {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.width = reader.int32();
          break;
        case 3:
          message.height = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Image {
    return {
      url: isSet(object.url) ? String(object.url) : "",
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: Image): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },

  fromPartial(object: DeepPartial<Image>): Image {
    const message = createBaseImage();
    message.url = object.url ?? "";
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseArtistCounts(): ArtistCounts {
  return { inLikedSongs: 0, inPlaylists: 0 };
}

export const ArtistCounts = {
  encode(message: ArtistCounts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inLikedSongs !== 0) {
      writer.uint32(8).int32(message.inLikedSongs);
    }
    if (message.inPlaylists !== 0) {
      writer.uint32(16).int32(message.inPlaylists);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArtistCounts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArtistCounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inLikedSongs = reader.int32();
          break;
        case 2:
          message.inPlaylists = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArtistCounts {
    return {
      inLikedSongs: isSet(object.inLikedSongs) ? Number(object.inLikedSongs) : 0,
      inPlaylists: isSet(object.inPlaylists) ? Number(object.inPlaylists) : 0,
    };
  },

  toJSON(message: ArtistCounts): unknown {
    const obj: any = {};
    message.inLikedSongs !== undefined && (obj.inLikedSongs = Math.round(message.inLikedSongs));
    message.inPlaylists !== undefined && (obj.inPlaylists = Math.round(message.inPlaylists));
    return obj;
  },

  fromPartial(object: DeepPartial<ArtistCounts>): ArtistCounts {
    const message = createBaseArtistCounts();
    message.inLikedSongs = object.inLikedSongs ?? 0;
    message.inPlaylists = object.inPlaylists ?? 0;
    return message;
  },
};

function createBaseListArtistsRequest(): ListArtistsRequest {
  return { query: "" };
}

export const ListArtistsRequest = {
  encode(message: ListArtistsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.query !== "") {
      writer.uint32(10).string(message.query);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListArtistsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListArtistsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.query = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListArtistsRequest {
    return { query: isSet(object.query) ? String(object.query) : "" };
  },

  toJSON(message: ListArtistsRequest): unknown {
    const obj: any = {};
    message.query !== undefined && (obj.query = message.query);
    return obj;
  },

  fromPartial(object: DeepPartial<ListArtistsRequest>): ListArtistsRequest {
    const message = createBaseListArtistsRequest();
    message.query = object.query ?? "";
    return message;
  },
};

function createBaseListArtistsResponse(): ListArtistsResponse {
  return { artists: [] };
}

export const ListArtistsResponse = {
  encode(message: ListArtistsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.artists) {
      Artist.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListArtistsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListArtistsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.artists.push(Artist.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListArtistsResponse {
    return { artists: Array.isArray(object?.artists) ? object.artists.map((e: any) => Artist.fromJSON(e)) : [] };
  },

  toJSON(message: ListArtistsResponse): unknown {
    const obj: any = {};
    if (message.artists) {
      obj.artists = message.artists.map((e) => e ? Artist.toJSON(e) : undefined);
    } else {
      obj.artists = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListArtistsResponse>): ListArtistsResponse {
    const message = createBaseListArtistsResponse();
    message.artists = object.artists?.map((e) => Artist.fromPartial(e)) || [];
    return message;
  },
};

export type ArtistServiceDefinition = typeof ArtistServiceDefinition;
export const ArtistServiceDefinition = {
  name: "ArtistService",
  fullName: "music.artists.v1.ArtistService",
  methods: {
    listArtists: {
      name: "ListArtists",
      requestType: ListArtistsRequest,
      requestStream: false,
      responseType: ListArtistsResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ArtistServiceServiceImplementation<CallContextExt = {}> {
  listArtists(
    request: ListArtistsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListArtistsResponse>>;
}

export interface ArtistServiceClient<CallOptionsExt = {}> {
  listArtists(
    request: DeepPartial<ListArtistsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListArtistsResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
