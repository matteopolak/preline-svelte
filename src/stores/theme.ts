import type { Color } from "$lib";
import { writable } from "svelte/store";

type ThemeColor = Exclude<Color, "primary" | "secondary">;

export type Theme = {
	primary: ThemeColor,
	secondary: ThemeColor,
	neutral: ThemeColor,
}

export const theme = writable<Theme>({
	primary: 'rose',
	secondary: 'red',
	neutral: 'neutral'
});
