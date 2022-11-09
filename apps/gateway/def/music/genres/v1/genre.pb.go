// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: music/genres/v1/genre.proto

package genres

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

type Genre struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *Genre) Reset() {
	*x = Genre{}
	if protoimpl.UnsafeEnabled {
		mi := &file_music_genres_v1_genre_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Genre) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Genre) ProtoMessage() {}

func (x *Genre) ProtoReflect() protoreflect.Message {
	mi := &file_music_genres_v1_genre_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Genre.ProtoReflect.Descriptor instead.
func (*Genre) Descriptor() ([]byte, []int) {
	return file_music_genres_v1_genre_proto_rawDescGZIP(), []int{0}
}

func (x *Genre) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type ListGenresRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ListGenresRequest) Reset() {
	*x = ListGenresRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_music_genres_v1_genre_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListGenresRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListGenresRequest) ProtoMessage() {}

func (x *ListGenresRequest) ProtoReflect() protoreflect.Message {
	mi := &file_music_genres_v1_genre_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListGenresRequest.ProtoReflect.Descriptor instead.
func (*ListGenresRequest) Descriptor() ([]byte, []int) {
	return file_music_genres_v1_genre_proto_rawDescGZIP(), []int{1}
}

type ListGenresResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Genres []*Genre `protobuf:"bytes,1,rep,name=genres,proto3" json:"genres,omitempty"`
}

func (x *ListGenresResponse) Reset() {
	*x = ListGenresResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_music_genres_v1_genre_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListGenresResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListGenresResponse) ProtoMessage() {}

func (x *ListGenresResponse) ProtoReflect() protoreflect.Message {
	mi := &file_music_genres_v1_genre_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListGenresResponse.ProtoReflect.Descriptor instead.
func (*ListGenresResponse) Descriptor() ([]byte, []int) {
	return file_music_genres_v1_genre_proto_rawDescGZIP(), []int{2}
}

func (x *ListGenresResponse) GetGenres() []*Genre {
	if x != nil {
		return x.Genres
	}
	return nil
}

var File_music_genres_v1_genre_proto protoreflect.FileDescriptor

var file_music_genres_v1_genre_proto_rawDesc = []byte{
	0x0a, 0x1b, 0x6d, 0x75, 0x73, 0x69, 0x63, 0x2f, 0x67, 0x65, 0x6e, 0x72, 0x65, 0x73, 0x2f, 0x76,
	0x31, 0x2f, 0x67, 0x65, 0x6e, 0x72, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0f, 0x6d,
	0x75, 0x73, 0x69, 0x63, 0x2e, 0x67, 0x65, 0x6e, 0x72, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x22, 0x1b,
	0x0a, 0x05, 0x47, 0x65, 0x6e, 0x72, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x13, 0x0a, 0x11, 0x4c,
	0x69, 0x73, 0x74, 0x47, 0x65, 0x6e, 0x72, 0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x22, 0x44, 0x0a, 0x12, 0x4c, 0x69, 0x73, 0x74, 0x47, 0x65, 0x6e, 0x72, 0x65, 0x73, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2e, 0x0a, 0x06, 0x67, 0x65, 0x6e, 0x72, 0x65, 0x73,
	0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x6d, 0x75, 0x73, 0x69, 0x63, 0x2e, 0x67,
	0x65, 0x6e, 0x72, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x6e, 0x72, 0x65, 0x52, 0x06,
	0x67, 0x65, 0x6e, 0x72, 0x65, 0x73, 0x32, 0x68, 0x0a, 0x0d, 0x47, 0x65, 0x6e, 0x72, 0x65, 0x73,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x57, 0x0a, 0x0a, 0x4c, 0x69, 0x73, 0x74, 0x47,
	0x65, 0x6e, 0x72, 0x65, 0x73, 0x12, 0x22, 0x2e, 0x6d, 0x75, 0x73, 0x69, 0x63, 0x2e, 0x67, 0x65,
	0x6e, 0x72, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x47, 0x65, 0x6e, 0x72,
	0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x23, 0x2e, 0x6d, 0x75, 0x73, 0x69,
	0x63, 0x2e, 0x67, 0x65, 0x6e, 0x72, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x4c, 0x69, 0x73, 0x74,
	0x47, 0x65, 0x6e, 0x72, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00,
	0x42, 0xc2, 0x01, 0x0a, 0x13, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x75, 0x73, 0x69, 0x63, 0x2e, 0x67,
	0x65, 0x6e, 0x72, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x42, 0x0a, 0x47, 0x65, 0x6e, 0x72, 0x65, 0x50,
	0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x41, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x6e, 0x69, 0x6b, 0x70, 0x61, 0x75, 0x2f, 0x73, 0x70, 0x6f, 0x74, 0x69, 0x6d,
	0x79, 0x2f, 0x61, 0x70, 0x70, 0x73, 0x2f, 0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x2f, 0x64,
	0x65, 0x66, 0x2f, 0x6d, 0x75, 0x73, 0x69, 0x63, 0x2f, 0x67, 0x65, 0x6e, 0x72, 0x65, 0x73, 0x2f,
	0x76, 0x31, 0x3b, 0x67, 0x65, 0x6e, 0x72, 0x65, 0x73, 0xa2, 0x02, 0x03, 0x4d, 0x47, 0x58, 0xaa,
	0x02, 0x0f, 0x4d, 0x75, 0x73, 0x69, 0x63, 0x2e, 0x47, 0x65, 0x6e, 0x72, 0x65, 0x73, 0x2e, 0x56,
	0x31, 0xca, 0x02, 0x0f, 0x4d, 0x75, 0x73, 0x69, 0x63, 0x5c, 0x47, 0x65, 0x6e, 0x72, 0x65, 0x73,
	0x5c, 0x56, 0x31, 0xe2, 0x02, 0x1b, 0x4d, 0x75, 0x73, 0x69, 0x63, 0x5c, 0x47, 0x65, 0x6e, 0x72,
	0x65, 0x73, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0xea, 0x02, 0x11, 0x4d, 0x75, 0x73, 0x69, 0x63, 0x3a, 0x3a, 0x47, 0x65, 0x6e, 0x72, 0x65,
	0x73, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_music_genres_v1_genre_proto_rawDescOnce sync.Once
	file_music_genres_v1_genre_proto_rawDescData = file_music_genres_v1_genre_proto_rawDesc
)

func file_music_genres_v1_genre_proto_rawDescGZIP() []byte {
	file_music_genres_v1_genre_proto_rawDescOnce.Do(func() {
		file_music_genres_v1_genre_proto_rawDescData = protoimpl.X.CompressGZIP(file_music_genres_v1_genre_proto_rawDescData)
	})
	return file_music_genres_v1_genre_proto_rawDescData
}

var file_music_genres_v1_genre_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_music_genres_v1_genre_proto_goTypes = []interface{}{
	(*Genre)(nil),              // 0: music.genres.v1.Genre
	(*ListGenresRequest)(nil),  // 1: music.genres.v1.ListGenresRequest
	(*ListGenresResponse)(nil), // 2: music.genres.v1.ListGenresResponse
}
var file_music_genres_v1_genre_proto_depIdxs = []int32{
	0, // 0: music.genres.v1.ListGenresResponse.genres:type_name -> music.genres.v1.Genre
	1, // 1: music.genres.v1.GenresService.ListGenres:input_type -> music.genres.v1.ListGenresRequest
	2, // 2: music.genres.v1.GenresService.ListGenres:output_type -> music.genres.v1.ListGenresResponse
	2, // [2:3] is the sub-list for method output_type
	1, // [1:2] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_music_genres_v1_genre_proto_init() }
func file_music_genres_v1_genre_proto_init() {
	if File_music_genres_v1_genre_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_music_genres_v1_genre_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Genre); i {
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
		file_music_genres_v1_genre_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListGenresRequest); i {
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
		file_music_genres_v1_genre_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListGenresResponse); i {
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
			RawDescriptor: file_music_genres_v1_genre_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_music_genres_v1_genre_proto_goTypes,
		DependencyIndexes: file_music_genres_v1_genre_proto_depIdxs,
		MessageInfos:      file_music_genres_v1_genre_proto_msgTypes,
	}.Build()
	File_music_genres_v1_genre_proto = out.File
	file_music_genres_v1_genre_proto_rawDesc = nil
	file_music_genres_v1_genre_proto_goTypes = nil
	file_music_genres_v1_genre_proto_depIdxs = nil
}
