<script lang="ts">
  import type { Artist } from '$lib/api/artists.js'
  import ArtistItem from './ArtistItem.svelte'
  import Fuse from 'fuse.js'
  import type { PageData } from './$types.js'

  export let data: PageData

  let allArtists: Artist[] = data.artists
  let needle = ''
  let fuse: Fuse<Artist> = new Fuse(allArtists, {
    keys: ['name']
  })

  function filter(searchTerm: string): Artist[] {
    if (!fuse || searchTerm === '') return allArtists
    return fuse.search(searchTerm).map((result) => result.item)
  }
</script>

<h2>Artists</h2>

<p>
  Search
  <input type="text" bind:value={needle} />
</p>

{#each filter(needle) as artist}
  <ArtistItem {artist} />
{/each}
