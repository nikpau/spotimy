// @generated by protoc-gen-es v0.1.1 with parameter "target=js+dts"
// @generated from file user/v1/user.proto (package user.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3} from "@bufbuild/protobuf";
import {SpotifyToken} from "./spotify_pb.js";

/**
 * @generated from message user.v1.User
 */
export const User = proto3.makeMessageType(
  "user.v1.User",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user.v1.GetUserRequest
 */
export const GetUserRequest = proto3.makeMessageType(
  "user.v1.GetUserRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user.v1.GetUserResponse
 */
export const GetUserResponse = proto3.makeMessageType(
  "user.v1.GetUserResponse",
  () => [
    { no: 1, name: "user", kind: "message", T: User },
  ],
);

/**
 * @generated from message user.v1.ListUsersRequest
 */
export const ListUsersRequest = proto3.makeMessageType(
  "user.v1.ListUsersRequest",
  [],
);

/**
 * @generated from message user.v1.ListUsersResponse
 */
export const ListUsersResponse = proto3.makeMessageType(
  "user.v1.ListUsersResponse",
  () => [
    { no: 1, name: "users", kind: "message", T: User, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user.v1.CreateUserRequest
 */
export const CreateUserRequest = proto3.makeMessageType(
  "user.v1.CreateUserRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "auth_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "spotify_token", kind: "message", T: SpotifyToken },
  ],
);

