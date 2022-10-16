<script lang="ts">
	import type { PageData } from './$types.js';

	import { createConnectTransport, createPromiseClient } from '@bufbuild/connect-web';
	import { ArtistService } from '@spotimy/api-web/music/artists/v1/artist_connectweb.js';

	export let data: PageData;

	let artist = data.artists[0];

	async function loadMore() {
		console.debug('Create transport');
		const transport = createConnectTransport({
			baseUrl: 'http://localhost:50002'
		});
		console.debug('Create client');
		const client = createPromiseClient(ArtistService, transport);

		console.debug('Do request');
		const response = await client.listArtists({
			query: 'Kollegah'
		});
		console.log(response.artists);
		artist = response.artists[0];
	}
</script>

<h1>Welcome to SvelteKit</h1>

<h2>Artist: {artist.name}</h2>

<button on:click={loadMore}>Do request</button>
