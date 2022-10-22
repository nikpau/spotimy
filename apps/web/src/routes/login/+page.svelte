<script lang="ts">
	import { getAuthorizeUrl } from '$lib/spotify/url.js'

	function redirectToSpotify() {
		window.open(getAuthorizeUrl(), '_self', 'WIDTH=400,HEIGHT=500')
	}
</script>

<button on:click={redirectToSpotify}>Login to Spotify</button>
