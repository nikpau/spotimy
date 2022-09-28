<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
</script>

<p>Login with code {data.auth.access_token}</p>
