<script lang="ts">
	import { spotifyWeb } from '$lib/spotify/web.js';
	import type { Artist } from '@spotimy/api-web/music/artists/v1/artist_pb.js';

	export let artist: Artist;
</script>

<div class="artist">
	{#if artist.images.length > 0}
		<img width="100" src={artist.images[0].url} alt={artist.name} />
	{/if}
	<p>{artist.name} <a href={spotifyWeb.artist(artist.id).toString()}>🔗</a></p>
	{#if artist.counts !== undefined}
		<p>Liked songs: {artist.counts.inLikedSongs} | Playlists: {artist.counts.inPlaylists}</p>
	{/if}
</div>

<style>
	.artist {
		padding: 10px;
		border: 1px solid #ccc;
	}
</style>
