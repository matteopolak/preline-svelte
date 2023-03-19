<script context="module" lang="ts">
	export type ListType = 'bullet' | 'number' | 'none';
</script>

<script lang="ts">
	export let type: ListType = 'bullet';
</script>

<svelte:element
	this={type === 'number' ? 'ol' : 'ul'}
	class="{type === 'number' ? 'list-decimal' : 'list-disc'} list-inside"
>
	<slot />
</svelte:element>
