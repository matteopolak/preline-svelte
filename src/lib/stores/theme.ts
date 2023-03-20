import type { Color } from "$lib";
import { writable } from "svelte/store";

export type ThemeColor = Exclude<Color, "primary" | "secondary">;

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

export function hexToRgb(hex: string) {
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);

	return `${r} ${g} ${b}`;
}