<script lang="ts">
	import { setContext } from 'svelte';

	setContext('button_grouped', true);
</script>

<div class="inline-flex rounded-md shadow-sm">
	<slot />
</div>
