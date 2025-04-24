export type Keymap = Record<
string,
	{
		keyDown: {
			original?: string,
			withShift?: string
		},
		keyUp: string
	}
>;
