<script lang="ts">
	// Accordion needs the JavaScript library to work
	import 'preline/dist/preline';

	export let multiple = false;
</script>

<div class="hs-accordion-group" class:data-hs-accordion-always-open={multiple}>
	<slot />
</div>
