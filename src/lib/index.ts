import type colors from 'tailwindcss/colors';

export type Modifier = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type Color = Exclude<keyof typeof colors, 'inherit' | 'current' | 'transparent' | 'black' | 'white' | 'lightBlue' | 'warmGray' | 'trueGray' | 'coolGray' | 'blueGray'> | 'primary' | 'secondary';
export type ColorClass<P extends string, M extends Modifier = Modifier, C extends Color = Color> = `${P}-${C}-${M}`;

export { default as Accordion } from './accordion/Accordion.svelte';
export { default as AccordionItem } from './accordion/AccordionItem.svelte';

export { default as Alert } from './alert/Alert.svelte';

export { default as Avatar } from './avatar/Avatar.svelte';
export { default as AvatarGroup } from './avatar/AvatarGroup.svelte';

export { default as Badge } from './badge/Badge.svelte';

export { default as Button } from './button/Button.svelte';
export { default as ButtonGroup } from './button/ButtonGroup.svelte';

export { default as Card } from './card/Card.svelte';

export { default as Container } from './container/Container.svelte';

export { default as Dropdown } from './dropdown/Dropdown.svelte';

export { default as Indicator } from './indicator/Indicator.svelte';

export { default as List } from './list/List.svelte';
export { default as ListItem } from './list/ListItem.svelte';

export { default as Modal } from './modal/Modal.svelte';

export { default as Navbar } from './navbar/Navbar.svelte';
export { default as NavbarItem } from './navbar/NavbarItem.svelte';

export { default as Progress } from './progress/Progress.svelte';

export { default as Spinner } from './spinner/Spinner.svelte';

export { default as Table } from './table/Table.svelte';
export { default as TableBody } from './table/TableBody.svelte';
export { default as TableCell } from './table/TableCell.svelte';
export { default as TableHead } from './table/TableHead.svelte';
export { default as TableHeadItem } from './table/TableHeadItem.svelte';
export { default as TableRow } from './table/TableRow.svelte';

export { default as Theme } from './theme/Theme.svelte';
export { default as ThemeItem } from './theme/ThemeItem.svelte';
