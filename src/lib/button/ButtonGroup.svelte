<script lang="ts">
	import { setContext } from 'svelte';

	setContext('grouped', true);
</script>

<div class="inline-flex rounded-md shadow-sm">
	<slot />
</div>
