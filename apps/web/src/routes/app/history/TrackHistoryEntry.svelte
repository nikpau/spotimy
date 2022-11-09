<script lang="ts">
	import { DateTime } from 'luxon'
	import type { TrackHistoryEntry } from '../../../lib/service/track-history/index.js'

	export let entry: TrackHistoryEntry

	// TODO: API should only return `Date` objects, never an ISO string.
	const playedAt =
		typeof entry.playedAt === 'string'
			? DateTime.fromISO(entry.playedAt)
			: DateTime.fromJSDate(entry.playedAt)
</script>

<div class="entry">
	<p>
		{playedAt.toLocaleString()}
		{playedAt.toFormat('HH:mm')}: {entry.track.name}
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
