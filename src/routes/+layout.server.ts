import type { ThemeColor } from '../lib/stores/theme';
import type { LayoutServerLoad } from './$types';

export const load = (({ cookies }) => {
	const primary = cookies.get('theme_primary') as ThemeColor | undefined;
	const secondary = cookies.get('theme_secondary') as ThemeColor | undefined;
	const neutral = cookies.get('theme_neutral') as ThemeColor | undefined;

	return {
		theme: {
			primary: primary || 'rose',
			secondary: secondary || 'red',
			neutral: neutral || 'neutral'
		}
	}
}) satisfies LayoutServerLoad;
