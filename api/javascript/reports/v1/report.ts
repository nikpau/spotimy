/* eslint-disable */
import { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";

export const protobufPackage = "reports.v1";

export interface Report {
  report: Uint8Array;
}

export interface GetReportRequest {
  userId: string;
}

export interface GetReportResponse {
  report: Report | undefined;
}

function createBaseReport(): Report {
  return { report: new Uint8Array() };
}

export const Report = {
  encode(message: Report, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.report.length !== 0) {
      writer.uint32(10).bytes(message.report);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Report {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.report = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Report {
    return { report: isSet(object.report) ? bytesFromBase64(object.report) : new Uint8Array() };
  },

  toJSON(message: Report): unknown {
    const obj: any = {};
    message.report !== undefined &&
      (obj.report = base64FromBytes(message.report !== undefined ? message.report : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<Report>): Report {
    const message = createBaseReport();
    message.report = object.report ?? new Uint8Array();
    return message;
  },
};

function createBaseGetReportRequest(): GetReportRequest {
  return { userId: "" };
}

export const GetReportRequest = {
  encode(message: GetReportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetReportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetReportRequest();
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

  fromJSON(object: any): GetReportRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: GetReportRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetReportRequest>): GetReportRequest {
    const message = createBaseGetReportRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseGetReportResponse(): GetReportResponse {
  return { report: undefined };
}

export const GetReportResponse = {
  encode(message: GetReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.report !== undefined) {
      Report.encode(message.report, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetReportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.report = Report.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetReportResponse {
    return { report: isSet(object.report) ? Report.fromJSON(object.report) : undefined };
  },

  toJSON(message: GetReportResponse): unknown {
    const obj: any = {};
    message.report !== undefined && (obj.report = message.report ? Report.toJSON(message.report) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetReportResponse>): GetReportResponse {
    const message = createBaseGetReportResponse();
    message.report = (object.report !== undefined && object.report !== null)
      ? Report.fromPartial(object.report)
      : undefined;
    return message;
  },
};

export type ReportServiceDefinition = typeof ReportServiceDefinition;
export const ReportServiceDefinition = {
  name: "ReportService",
  fullName: "reports.v1.ReportService",
  methods: {
    getReport: {
      name: "GetReport",
      requestType: GetReportRequest,
      requestStream: false,
      responseType: GetReportResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ReportServiceServiceImplementation<CallContextExt = {}> {
  getReport(request: GetReportRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetReportResponse>>;
}

export interface ReportServiceClient<CallOptionsExt = {}> {
  getReport(request: DeepPartial<GetReportRequest>, options?: CallOptions & CallOptionsExt): Promise<GetReportResponse>;
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

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
