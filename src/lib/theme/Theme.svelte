<script lang="ts">
	import { Button, Dropdown } from '$lib';
	import { hexToRgb, theme } from '../stores/theme';
	import colors from 'tailwindcss/colors';
	import { browser } from '$app/environment';

	if (browser) {
		theme.subscribe(theme => {
			document.cookie = `theme=${JSON.stringify(theme)}`;

			const root = document.querySelector(':root') as HTMLElement;

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
		});
	}
</script>

<Dropdown>
	<svelte:fragment slot="button">
		<Button pill>
			Theme
			<svg
				class="w-5 h-5"
				xmlns="http://www.w3.org/2000/svg"
				height="24"
				viewBox="0 0 24 24"
				width="24"
				fill="currentColor"
			>
				<path d="M0 0h24v24H0z" fill="none" />
				<path
					d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"
				/>
			</svg>
		</Button>
	</svelte:fragment>

	<slot />
</Dropdown>
