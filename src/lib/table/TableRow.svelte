<script lang="ts">
	import { getContext } from 'svelte';

	let striped = getContext('striped') ?? false;
	let hoverable = getContext('hoverable') ?? false;
</script>

<tr
	class="{striped
		? 'odd:bg-white even:bg-neutral-100 dark:odd:bg-neutral-800 dark:even:bg-neutral-900'
		: ''} {hoverable ? 'hover:bg-neutral-100 dark:hover:bg-neutral-700' : ''}"
>
	<slot />
</tr>
