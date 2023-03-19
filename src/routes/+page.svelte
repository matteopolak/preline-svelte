<script lang="ts">
	import {
		Alert,
		Badge,
		Button,
		ButtonGroup,
		List,
		ListItem,
		Table,
		TableBody,
		Theme,
		ThemeItem,
		TableHead,
		TableHeadItem,
		TableRow,
		TableCell,
		Navbar,
		NavbarItem,
	} from '$lib';
</script>

<Navbar color="secondary">
	<NavbarItem>Hey there</NavbarItem>
	<NavbarItem>Hey there</NavbarItem>
	<NavbarItem>Hey there</NavbarItem>
</Navbar>

<Alert withIcon>Watch out!</Alert>
<Button color="secondary" pill type="ghost">Hey there</Button>
<Button color="secondary" pill type="link">Hey there</Button>

<ButtonGroup>
	<Button color="secondary" pill type="outline">Hey there</Button>
	<Button color="secondary" pill type="soft">Hey there</Button>
	<Button color="secondary" pill type="solid">Hey there</Button>
</ButtonGroup>

<List>
	<ListItem color="secondary">Hey there</ListItem>
	<ListItem>Hey there</ListItem>
	<ListItem>Hey there</ListItem>
</List>

<Theme>
	<ThemeItem
		name="Shore"
		primary="blue"
		secondary="teal"
		description="A cool and refreshing theme."
	/>
	<ThemeItem
		name="Bubblegum"
		primary="pink"
		secondary="violet"
		description="A sweet and sugary theme."
	/>
	<ThemeItem
		name="Sprite"
		primary="lime"
		secondary="yellow"
		description="A refreshing and zesty theme."
	/>
</Theme>

<Badge>Hello</Badge>
<Badge color="emerald" type="soft" pill>Hello</Badge>

<Table hoverable striped>
	<TableHead>
		<TableHeadItem>Hello</TableHeadItem>
		<TableHeadItem>Hey</TableHeadItem>
	</TableHead>
	<TableBody>
		<TableRow>
			<TableCell>Hi</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Hi</TableCell>
			<TableCell>Hi</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Hi</TableCell>
			<TableCell><Button pill type="soft" color="lime">Yo</Button></TableCell>
		</TableRow>
	</TableBody>
</Table>
