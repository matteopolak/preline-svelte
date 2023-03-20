// See https://kit.svelte.dev/docs/types#app

import type { ThemeColor } from "./lib/stores/theme";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface PageData {
			theme: {
				primary: ThemeColor;
				secondary: ThemeColor;
				neutral: ThemeColor;
			}
		}

		// interface PageData {}
		// interface Platform {}
	}
}

export {};
