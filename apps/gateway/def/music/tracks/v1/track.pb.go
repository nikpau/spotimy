// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: music/tracks/v1/track.proto

package tracks

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Track struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name     int64    `protobuf:"varint,1,opt,name=name,proto3" json:"name,omitempty"`
	ArtistId string   `protobuf:"bytes,2,opt,name=artist_id,json=artistId,proto3" json:"artist_id,omitempty"`
	Bpm      int32    `protobuf:"varint,3,opt,name=bpm,proto3" json:"bpm,omitempty"`
	Genres   []string `protobuf:"bytes,4,rep,name=genres,proto3" json:"genres,omitempty"`
}

func (x *Track) Reset() {
	*x = Track{}
	if protoimpl.UnsafeEnabled {
		mi := &file_music_tracks_v1_track_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Track) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Track) ProtoMessage() {}

func (x *Track) ProtoReflect() protoreflect.Message {
	mi := &file_music_tracks_v1_track_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Track.ProtoReflect.Descriptor instead.
func (*Track) Descriptor() ([]byte, []int) {
	return file_music_tracks_v1_track_proto_rawDescGZIP(), []int{0}
}

func (x *Track) GetName() int64 {
	if x != nil {
		return x.Name
	}
	return 0
}

func (x *Track) GetArtistId() string {
	if x != nil {
		return x.ArtistId
	}
	return ""
}

func (x *Track) GetBpm() int32 {
	if x != nil {
		return x.Bpm
	}
	return 0
}

func (x *Track) GetGenres() []string {
	if x != nil {
		return x.Genres
	}
	return nil
}

type ListTracksRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Ids []string `protobuf:"bytes,1,rep,name=ids,proto3" json:"ids,omitempty"`
}

func (x *ListTracksRequest) Reset() {
	*x = ListTracksRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_music_tracks_v1_track_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListTracksRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListTracksRequest) ProtoMessage() {}

func (x *ListTracksRequest) ProtoReflect() protoreflect.Message {
	mi := &file_music_tracks_v1_track_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListTracksRequest.ProtoReflect.Descriptor instead.
func (*ListTracksRequest) Descriptor() ([]byte, []int) {
	return file_music_tracks_v1_track_proto_rawDescGZIP(), []int{1}
}

func (x *ListTracksRequest) GetIds() []string {
	if x != nil {
		return x.Ids
	}
	return nil
}

type ListTracksResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Tracks []*Track `protobuf:"bytes,1,rep,name=tracks,proto3" json:"tracks,omitempty"`
}

func (x *ListTracksResponse) Reset() {
	*x = ListTracksResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_music_tracks_v1_track_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListTracksResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListTracksResponse) ProtoMessage() {}

func (x *ListTracksResponse) ProtoReflect() protoreflect.Message {
	mi := &file_music_tracks_v1_track_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListTracksResponse.ProtoReflect.Descriptor instead.
func (*ListTracksResponse) Descriptor() ([]byte, []int) {
	return file_music_tracks_v1_track_proto_rawDescGZIP(), []int{2}
}

func (x *ListTracksResponse) GetTracks() []*Track {
	if x != nil {
		return x.Tracks
	}
	return nil
}

var File_music_tracks_v1_track_proto protoreflect.FileDescriptor

var file_music_tracks_v1_track_proto_rawDesc = []byte{
	0x0a, 0x1b, 0x6d, 0x75, 0x73, 0x69, 0x63, 0x2f, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x2f, 0x76,
	0x31, 0x2f, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0f, 0x6d,
	0x75, 0x73, 0x69, 0x63, 0x2e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x2e, 0x76, 0x31, 0x22, 0x62,
	0x0a, 0x05, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x61,
	0x72, 0x74, 0x69, 0x73, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08,
	0x61, 0x72, 0x74, 0x69, 0x73, 0x74, 0x49, 0x64, 0x12, 0x10, 0x0a, 0x03, 0x62, 0x70, 0x6d, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x03, 0x62, 0x70, 0x6d, 0x12, 0x16, 0x0a, 0x06, 0x67, 0x65,
	0x6e, 0x72, 0x65, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x09, 0x52, 0x06, 0x67, 0x65, 0x6e, 0x72,
	0x65, 0x73, 0x22, 0x25, 0x0a, 0x11, 0x4c, 0x69, 0x73, 0x74, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x73,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x10, 0x0a, 0x03, 0x69, 0x64, 0x73, 0x18, 0x01,
	0x20, 0x03, 0x28, 0x09, 0x52, 0x03, 0x69, 0x64, 0x73, 0x22, 0x44, 0x0a, 0x12, 0x4c, 0x69, 0x73,
	0x74, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x2e, 0x0a, 0x06, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x16, 0x2e, 0x6d, 0x75, 0x73, 0x69, 0x63, 0x2e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x2e, 0x76,
	0x31, 0x2e, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x06, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x32,
	0x65, 0x0a, 0x0c, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12,
	0x55, 0x0a, 0x0a, 0x4c, 0x69, 0x73, 0x74, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x12, 0x22, 0x2e,
	0x6d, 0x75, 0x73, 0x69, 0x63, 0x2e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x2e, 0x76, 0x31, 0x2e,
	0x4c, 0x69, 0x73, 0x74, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x23, 0x2e, 0x6d, 0x75, 0x73, 0x69, 0x63, 0x2e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73,
	0x2e, 0x76, 0x31, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0xc2, 0x01, 0x0a, 0x13, 0x63, 0x6f, 0x6d, 0x2e, 0x6d,
	0x75, 0x73, 0x69, 0x63, 0x2e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x2e, 0x76, 0x31, 0x42, 0x0a,
	0x54, 0x72, 0x61, 0x63, 0x6b, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x41, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6e, 0x69, 0x6b, 0x70, 0x61, 0x75, 0x2f,
	0x73, 0x70, 0x6f, 0x74, 0x69, 0x6d, 0x79, 0x2f, 0x61, 0x70, 0x70, 0x73, 0x2f, 0x67, 0x61, 0x74,
	0x65, 0x77, 0x61, 0x79, 0x2f, 0x64, 0x65, 0x66, 0x2f, 0x6d, 0x75, 0x73, 0x69, 0x63, 0x2f, 0x74,
	0x72, 0x61, 0x63, 0x6b, 0x73, 0x2f, 0x76, 0x31, 0x3b, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0xa2,
	0x02, 0x03, 0x4d, 0x54, 0x58, 0xaa, 0x02, 0x0f, 0x4d, 0x75, 0x73, 0x69, 0x63, 0x2e, 0x54, 0x72,
	0x61, 0x63, 0x6b, 0x73, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x0f, 0x4d, 0x75, 0x73, 0x69, 0x63, 0x5c,
	0x54, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x1b, 0x4d, 0x75, 0x73, 0x69,
	0x63, 0x5c, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x11, 0x4d, 0x75, 0x73, 0x69, 0x63, 0x3a,
	0x3a, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_music_tracks_v1_track_proto_rawDescOnce sync.Once
	file_music_tracks_v1_track_proto_rawDescData = file_music_tracks_v1_track_proto_rawDesc
)

func file_music_tracks_v1_track_proto_rawDescGZIP() []byte {
	file_music_tracks_v1_track_proto_rawDescOnce.Do(func() {
		file_music_tracks_v1_track_proto_rawDescData = protoimpl.X.CompressGZIP(file_music_tracks_v1_track_proto_rawDescData)
	})
	return file_music_tracks_v1_track_proto_rawDescData
}

var file_music_tracks_v1_track_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_music_tracks_v1_track_proto_goTypes = []interface{}{
	(*Track)(nil),              // 0: music.tracks.v1.Track
	(*ListTracksRequest)(nil),  // 1: music.tracks.v1.ListTracksRequest
	(*ListTracksResponse)(nil), // 2: music.tracks.v1.ListTracksResponse
}
var file_music_tracks_v1_track_proto_depIdxs = []int32{
	0, // 0: music.tracks.v1.ListTracksResponse.tracks:type_name -> music.tracks.v1.Track
	1, // 1: music.tracks.v1.TrackService.ListTracks:input_type -> music.tracks.v1.ListTracksRequest
	2, // 2: music.tracks.v1.TrackService.ListTracks:output_type -> music.tracks.v1.ListTracksResponse
	2, // [2:3] is the sub-list for method output_type
	1, // [1:2] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_music_tracks_v1_track_proto_init() }
func file_music_tracks_v1_track_proto_init() {
	if File_music_tracks_v1_track_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_music_tracks_v1_track_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Track); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_music_tracks_v1_track_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListTracksRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_music_tracks_v1_track_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListTracksResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_music_tracks_v1_track_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_music_tracks_v1_track_proto_goTypes,
		DependencyIndexes: file_music_tracks_v1_track_proto_depIdxs,
		MessageInfos:      file_music_tracks_v1_track_proto_msgTypes,
	}.Build()
	File_music_tracks_v1_track_proto = out.File
	file_music_tracks_v1_track_proto_rawDesc = nil
	file_music_tracks_v1_track_proto_goTypes = nil
	file_music_tracks_v1_track_proto_depIdxs = nil
}
