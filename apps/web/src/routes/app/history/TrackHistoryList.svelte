<script lang="ts">
	import Fuse from 'fuse.js'
	import { DateTime } from 'luxon'

	import type { Range } from '$lib/utils/range.js'

	import TrackHistoryEntry from './TrackHistoryEntry.svelte'
	import type { TrackHistory } from '../../../lib/service/track-history/index.js'
	import type { Genre } from '../../../lib/service/genre/index.js'

	export let history: TrackHistory
	export let genres: Genre[] = []

	let needle = ''
	let items: TrackHistory = []
	let genre: Genre | null = null
	let bpm: Range<number> = {
		min: undefined,
		max: undefined
	}
	let dateRange: Range<DateTime> = {
		min: undefined,
		max: undefined
	}
	const allowedDateRange: Range<DateTime> = {
		min: DateTime.fromJSDate(history[history.length - 1].playedAt),
		max: DateTime.fromJSDate(history[0].playedAt)
	}

	$: console.log('Daterange', dateRange)

	const fuse = new Fuse(history, {
		keys: ['track.name', 'track.genres']
	})

	function search(
		history: TrackHistory,
		queryTerm: string,
		genre: string | null,
		bpm: Range<number>
	): TrackHistory {
		console.debug('Update track history list')
		let items = history
		if (needle !== '') items = fuse.search(queryTerm).map((result) => result.item)
		if (genre !== null) items = items.filter((item) => item.track.genres.includes(genre!))
		if (bpm.min !== undefined) items = items.filter((item) => (item.track.bpm ?? 0) >= bpm.min!)
		if (bpm.max !== undefined) items = items.filter((item) => (item.track.bpm ?? 9999) <= bpm.max!)

		return items
	}

	$: items = search(history, needle, genre, bpm)
</script>

<p>
	<input type="text" bind:value={needle} placeholder="Search" />
	{#if genres && genres.length > 0}
		<select bind:value={genre}>
			<option value={null} selected>-----</option>
			{#each genres as genre}
				<option value={genre}>{genre}</option>
			{/each}
		</select>
	{/if}
	<input type="number" bind:value={bpm.min} placeholder="Minimum bpm" />
	<input type="number" bind:value={bpm.max} placeholder="Maximum bpm" />
	<!-- <DateTimeInput bind:date={dateRange.min} /> -->
	<!-- <DateTimeInput bind:date={dateRange.max} /> -->
</p>

<ul>
	{#each items as entry}
		<TrackHistoryEntry {entry} />
	{/each}
</ul>
