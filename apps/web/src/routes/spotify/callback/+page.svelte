<script lang="ts">
  import type { PageData } from './$types.js'

  export let data: PageData

  const { success } = data
</script>

{#if success}
  <p>You're successfully logged in and can go to the <a href="/app/artists">main page</a></p>
{/if}
