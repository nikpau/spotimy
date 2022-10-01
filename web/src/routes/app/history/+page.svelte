<script lang="ts">
  import { onMount } from 'svelte'
  import type { TrackHistory } from '$lib/api/history.js'
  import TrackHistoryList from './TrackHistoryList.svelte'
  import { API } from '$lib/api/index.js'
  import type { Genre } from '$lib/api/genre.js'

  let history: TrackHistory = []
  let genres: Genre[] = []

  onMount(async () => {
    history = await API.history.list()
    genres = await API.genres.list()
  })
</script>

<h2>History</h2>

{#if history.length > 0}
  <TrackHistoryList {history} {genres} />
{/if}
