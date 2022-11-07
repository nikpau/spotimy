<script lang="ts">
	import TrackHistoryList from './TrackHistoryList.svelte'
	import type { PageData } from './$types.js'
	import { onMount } from 'svelte'
	import { genresClient, trackHistoryClient } from '../../../lib/api.js'
	import type { Genre } from '@spotimy/api-web/music/genres/v1/genre_pb.js'
	import type { TrackHistoryEntry } from '@spotimy/api-web/music/tracks/v1/history_pb.js'

	export let data: PageData

	const { userId } = data

	// let { history, next_page_token } = data
	// const { genres } = data

	let genres: Genre[] = []
	let history: TrackHistoryEntry[] = []

	onMount(async () => {
		const genreResponse = await genresClient.listGenres({})
		genres = genreResponse.genres

		const trackHistoryResponse = await trackHistoryClient.listTrackHistory({
			userId: userId
		})
		history = trackHistoryResponse.entries
		console.debug(`fetched ${history.length} track history entries`)
	})
</script>

<h2>History</h2>
<ul>
	{#each history as entry}
		<li>{entry.track?.name}</li>
	{/each}
</ul>

<h2>Genres</h2>
<ul>
	{#each genres as genre}
		<li>{genre.name}</li>
	{/each}
</ul>
