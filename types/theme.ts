export interface Color {
	red: number;
	green: number;
	blue: number;
	hex: string;
}

export interface ThemeColor {
	color: Color;
	contrast: Color;
}

export interface Colors {
	primary: ThemeColor;
	secondary: ThemeColor;
	error: ThemeColor;
	background: Color;
	text: Color;
}

export interface TypeDefault {
	lineHeight: number;
	family: string;
	weight: number;
}

export interface Typography {
	heading: TypeDefault;
	body: TypeDefault;
	mono: TypeDefault;
	baseFontSize: number;
}

export interface Layout {
	maxContentWidth: number;
	baseSpacing: number;
	mobile: number;
}

export default interface Theme {
	colors: Colors;
	typography: Typography;
	layout: Layout;
}
