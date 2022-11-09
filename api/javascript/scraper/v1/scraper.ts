/* eslint-disable */
import { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";

export const protobufPackage = "scraper.v1";

export interface ScrapeRequest {
  userId: string;
}

export interface ScrapeResponse {
  content: string;
}

function createBaseScrapeRequest(): ScrapeRequest {
  return { userId: "" };
}

export const ScrapeRequest = {
  encode(message: ScrapeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScrapeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScrapeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScrapeRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: ScrapeRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial(object: DeepPartial<ScrapeRequest>): ScrapeRequest {
    const message = createBaseScrapeRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseScrapeResponse(): ScrapeResponse {
  return { content: "" };
}

export const ScrapeResponse = {
  encode(message: ScrapeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScrapeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScrapeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScrapeResponse {
    return { content: isSet(object.content) ? String(object.content) : "" };
  },

  toJSON(message: ScrapeResponse): unknown {
    const obj: any = {};
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  fromPartial(object: DeepPartial<ScrapeResponse>): ScrapeResponse {
    const message = createBaseScrapeResponse();
    message.content = object.content ?? "";
    return message;
  },
};

export type ScraperServiceDefinition = typeof ScraperServiceDefinition;
export const ScraperServiceDefinition = {
  name: "ScraperService",
  fullName: "scraper.v1.ScraperService",
  methods: {
    scrape: {
      name: "Scrape",
      requestType: ScrapeRequest,
      requestStream: false,
      responseType: ScrapeResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ScraperServiceServiceImplementation<CallContextExt = {}> {
  scrape(request: ScrapeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ScrapeResponse>>;
}

export interface ScraperServiceClient<CallOptionsExt = {}> {
  scrape(request: DeepPartial<ScrapeRequest>, options?: CallOptions & CallOptionsExt): Promise<ScrapeResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
