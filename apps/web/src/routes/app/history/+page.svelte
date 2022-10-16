<script lang="ts">
  import TrackHistoryList from './TrackHistoryList.svelte'
  import type { PageData } from './$types.js'
  import type { CursorPaginatedResult } from '$lib/service/pagination.js'
  import type { TrackHistory } from '$lib/service/track-history/index.js'

  export let data: PageData

  let { history, next_page_token }= data
  const { genres } = data

  
  async function loadMore() {
    const url = new URL('/api/history', window.location.toString())
    url.searchParams.set('page_token', next_page_token)
    url.searchParams.set('limit', '20')

    console.debug(`Get request to ${url.toString()}`)

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    });

    const data = await response.json() as CursorPaginatedResult<TrackHistory>
    history = [...history, ...data.results]
    next_page_token = data.next_page_token
  }
</script>

<h2>History</h2>
<p>{next_page_token}</p>

{#if history.length > 0}
  <TrackHistoryList {history} {genres} />

  <button on:click={loadMore}>Load more...</button>
{/if}
