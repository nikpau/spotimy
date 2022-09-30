<script lang="ts">
  import { API } from '$lib/api/index.js'
  import type { Artist } from '$lib/api/artists.js'
  import ArtistItem from './ArtistItem.svelte'
  import Fuse from 'fuse.js'

  let allArtists: Artist[] = []
  let needle = ''
  let fuse: Fuse<Artist> | undefined

  async function load() {
    allArtists = await API.artists.list_my_artists()
    fuse = new Fuse(allArtists, {
      keys: ['name']
    })
  }

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

{#await load()}
  <p>Loading</p>
{:then _}
  {#each filter(needle) as artist}
    <ArtistItem {artist} />
  {/each}
{/await}
