<script lang="ts">
	import { Button, type Color } from '$lib';
	import { getContext } from 'svelte';

	export let color: Color = getContext('navbar_color') ?? 'primary';
	export let href: string | undefined = undefined;
</script>

<Button type="link" {color} {href}>
	<slot />
</Button>
