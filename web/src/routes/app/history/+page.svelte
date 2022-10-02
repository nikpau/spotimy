<script lang="ts">
  import TrackHistoryList from './TrackHistoryList.svelte'
  import type { PageData } from './$types.js'

  export let data: PageData

  const { history, genres }= data
</script>

<h2>History</h2>

{#if history.length > 0}
  <TrackHistoryList {history} {genres} />
{/if}
