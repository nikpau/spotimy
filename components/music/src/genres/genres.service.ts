import { Genre as APIGenre, GenresServiceServiceImplementation, ListGenresRequest, ListGenresResponse } from '@spotimy/api/music/genres/v1/genre.js';
import { CallContext } from 'nice-grpc';

type Genre = APIGenre;

export class GenresService implements GenresServiceServiceImplementation {
  async listGenres(request: ListGenresRequest, context: CallContext): Promise<ListGenresResponse> {
    return {
      genres: [
        {name: "Rock"},
        {name: "Pop"},
        {name: "Rap"},
      ]
    }
  }
}
