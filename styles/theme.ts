import type ThemeType from '../types/theme';
import type { Color } from '../types/theme';

const fontFamily = 'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const white: Color = {
	red: 255,
	green: 255,
	blue: 255,
	hex: '#ffffff'
};

const black: Color = {
	red: 0,
	green: 0,
	blue: 0,
	hex: '#000000'
};

const darkBlue: Color = {
	red: 27,
	green: 38,
	blue: 44,
	hex: '#1B262C'
};

const blue: Color = {
	red: 15,
	green: 76,
	blue: 117,
	hex: '#0f4c75'
};

const lightBlue: Color = {
	red: 50,
	green: 130,
	blue: 184,
	hex: '#3282b8'
};

const lightestBlue: Color = {
	red: 187,
	green: 225,
	blue: 250,
	hex: '#bbe1fa'
};

const red: Color = {
	red: 255,
	green: 0,
	blue: 39,
	hex: '#f32735'
};

const orange: Color = {
	red: 235,
	green: 98,
	blue: 40,
	hex: '#eb6228'
};

const Theme: ThemeType = {
	colors: {
		primary: {
			color: lightestBlue,
			contrast: black
		},
		secondary: {
			color: blue,
			contrast: white
		},
		error: {
			color: orange,
			contrast: white
		},
		background: darkBlue,
		text: white
	},
	typography: {
		heading: {
			family: '"Cairo Play", cursive',
			weight: 400,
			lineHeight: 1.5
		},
		body: {
			family: '"Rubik", sans-serif',
			weight: 400,
			lineHeight: 1.7
		},
		mono: {
			family: '"Noto Sans Mono", monospace',
			weight: 400,
			lineHeight: 1.7
		},
		baseFontSize: 20
	},
	layout: {
		maxContentWidth: 800,
		mobile: 700,
		baseSpacing: 1
	}
};

export default Theme;
