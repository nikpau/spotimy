<script lang="ts">
  import type { TrackHistoryEntry } from '$lib/api/history.js'
  import { DateTime } from 'luxon'

  export let entry: TrackHistoryEntry

  const playedAt = DateTime.fromJSDate(entry.playedAt)
</script>

<div class="entry">
  <p>
    {playedAt.toLocaleString()}
    {playedAt.toFormat('hh:mm')}: {entry.track.name}
  </p>
  <p>
    {entry.track.genres.join(' | ')} |
    {entry.track.bpm ?? '∅'} bpm
  </p>
</div>

<style>
  .entry {
    padding: 10px;
    border: 1px solid #ccc;
    width: 600px;
  }
</style>
