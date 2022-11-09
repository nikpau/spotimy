<script lang="ts">
	import { DateTime } from 'luxon'

	export let date: DateTime | undefined

	const format = 'YYYY-MM-ddTHH:mm'

	let value = ''
	$: console.log({ value })

	function input(d: DateTime | undefined) {
		console.debug('Convert date to string', { d })
		if (d !== undefined) value = d.toFormat(format)
		else value = ''
	}

	function output(dateString: string) {
		console.debug('Convert date string to dateTime', { dateString })
		if (dateString !== '') date = DateTime.fromFormat(dateString, format)
		else date = undefined
	}

	$: input(date)
	$: output(value)
</script>

<input type="datetime-local" bind:value />
