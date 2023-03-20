<script lang="ts">
	import '../app.postcss';
	import '../app.css';

	import colors from 'tailwindcss/colors';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { hexToRgb } from '../lib/stores/theme';
	import { Spinner } from '$lib';

	let ready = false;

	if (browser) {
		const root = document.querySelector(':root') as HTMLElement;
		const theme = $page.data.theme;

		const primary = colors[theme.primary];
		const secondary = colors[theme.secondary];
		const neutral = colors[theme.neutral];

		for (let i = 100; i < 1_000; i += 100) {
			root.style.setProperty(
				`--color-primary-${i}`,
				hexToRgb(primary[i.toString() as keyof typeof primary])
			);

			root.style.setProperty(
				`--color-secondary-${i}`,
				hexToRgb(secondary[i.toString() as keyof typeof primary])
			);

			root.style.setProperty(
				`--color-neutral-${i}`,
				hexToRgb(neutral[i.toString() as keyof typeof primary])
			);
		}

		ready = true;
	}
</script>

{#if ready}
	<slot />
{:else}
	<div class="grid h-screen place-items-center">
		<Spinner color="stone" size="lg" />
	</div>
{/if}
