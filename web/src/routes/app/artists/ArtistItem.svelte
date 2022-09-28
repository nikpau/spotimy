<script lang="ts">
  import type { Artist } from '$lib/spotify/artist.js'
  import { web } from '$lib/spotify/web.js'

  export let artist: Artist
</script>

<div class="artist">
  {#if artist.images.length > 0}
    <img width=100 src={artist.images[0].url} alt={artist.name} />
  {/if}
  <p>{artist.name} <a href={web.artist(artist.id).toString()}>🔗</a></p>
  <p>Liked songs: {artist.counts.in_liked_songs} | Playlists: {artist.counts.in_playlists}</p>
</div>

<style>
  .artist {
    padding: 10px;
    border: 1px solid #ccc;
  }
</style>
