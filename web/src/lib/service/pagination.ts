export type CursorPaginationRequest<CursorValue> = {
  limit: number
  cursor: CursorValue
}

export type CursorPaginatedResult<Result> = {
  results: Result
  next_page_token: string
}
