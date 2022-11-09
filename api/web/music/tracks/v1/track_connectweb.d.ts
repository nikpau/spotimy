// @generated by protoc-gen-connect-web v0.2.1 with parameter "target=js+dts"
// @generated from file music/tracks/v1/track.proto (package music.tracks.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {ListTracksRequest, ListTracksResponse} from "./track_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * @generated from service music.tracks.v1.TrackService
 */
export declare const TrackService: {
  readonly typeName: "music.tracks.v1.TrackService",
  readonly methods: {
    /**
     * @generated from rpc music.tracks.v1.TrackService.ListTracks
     */
    readonly listTracks: {
      readonly name: "ListTracks",
      readonly I: typeof ListTracksRequest,
      readonly O: typeof ListTracksResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

