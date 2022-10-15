// @generated by protoc-gen-es v0.1.1 with parameter "target=js+dts"
// @generated from file music/tracks/v1/history.proto (package music.tracks.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";
import type {Track} from "./track_pb.js";

/**
 * @generated from message music.tracks.v1.TrackHistoryEntry
 */
export declare class TrackHistoryEntry extends Message<TrackHistoryEntry> {
  /**
   * @generated from field: music.tracks.v1.Track track = 1;
   */
  track?: Track;

  /**
   * @generated from field: int64 timestamp = 2;
   */
  timestamp: bigint;

  constructor(data?: PartialMessage<TrackHistoryEntry>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "music.tracks.v1.TrackHistoryEntry";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TrackHistoryEntry;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TrackHistoryEntry;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TrackHistoryEntry;

  static equals(a: TrackHistoryEntry | PlainMessage<TrackHistoryEntry> | undefined, b: TrackHistoryEntry | PlainMessage<TrackHistoryEntry> | undefined): boolean;
}

/**
 * @generated from message music.tracks.v1.ListTrackHistoryRequest
 */
export declare class ListTrackHistoryRequest extends Message<ListTrackHistoryRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * @generated from field: int64 start = 2;
   */
  start: bigint;

  /**
   * @generated from field: int64 end = 3;
   */
  end: bigint;

  /**
   * @generated from field: int32 limit = 4;
   */
  limit: number;

  /**
   * @generated from field: string page_token = 5;
   */
  pageToken: string;

  constructor(data?: PartialMessage<ListTrackHistoryRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "music.tracks.v1.ListTrackHistoryRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTrackHistoryRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTrackHistoryRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTrackHistoryRequest;

  static equals(a: ListTrackHistoryRequest | PlainMessage<ListTrackHistoryRequest> | undefined, b: ListTrackHistoryRequest | PlainMessage<ListTrackHistoryRequest> | undefined): boolean;
}

/**
 * @generated from message music.tracks.v1.ListTrackHistoryResponse
 */
export declare class ListTrackHistoryResponse extends Message<ListTrackHistoryResponse> {
  /**
   * @generated from field: repeated music.tracks.v1.TrackHistoryEntry entries = 1;
   */
  entries: TrackHistoryEntry[];

  /**
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  constructor(data?: PartialMessage<ListTrackHistoryResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "music.tracks.v1.ListTrackHistoryResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTrackHistoryResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTrackHistoryResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTrackHistoryResponse;

  static equals(a: ListTrackHistoryResponse | PlainMessage<ListTrackHistoryResponse> | undefined, b: ListTrackHistoryResponse | PlainMessage<ListTrackHistoryResponse> | undefined): boolean;
}
