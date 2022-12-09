import { createGlobalStyle } from 'styled-components';
import ThemeProps from '../types/themeProps';

const GlobalStyles = createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
}

html {
	font-size: ${({ theme }: ThemeProps) => theme.typography.baseFontSize}px;
	scroll-behavior: smooth;
}

body{
	font-family: ${({ theme }: ThemeProps) => theme.typography.body.family};
	line-height: ${({ theme }: ThemeProps) => theme.typography.body.lineHeight};
	font-weight: ${({ theme }: ThemeProps) => theme.typography.body.weight};
	font-style: normal;
	background-color: ${({ theme }: ThemeProps) => theme.colors.background.hex};
	color: ${({ theme }: ThemeProps) => theme.colors.text.hex};
	padding: ${({ theme }: ThemeProps) => theme.layout.baseSpacing * 2}rem ${({ theme }: ThemeProps) => theme.layout.baseSpacing}rem;
}

body, p, input, textarea {
	font-family: ${({ theme }: ThemeProps) => theme.typography.body.family};
	line-height: ${({ theme }: ThemeProps) => theme.typography.body.lineHeight};
	font-weight: ${({ theme }: ThemeProps) => theme.typography.body.weight};
}

main {
	width: 100%;
	max-width: ${({ theme }: ThemeProps) => theme.layout.maxContentWidth}px;
	margin: 0 auto;
}

input,textarea{
	display: block;
	width: 100%;
	max-width: 30rem;
	padding: ${({ theme }: ThemeProps) => theme.layout.baseSpacing * 0.25}rem ${({ theme }: ThemeProps) => theme.layout.baseSpacing}rem;
	font-size: 1rem;
	line-height: ${({ theme }: ThemeProps) => theme.typography.body.lineHeight};
	font-family: ${({ theme }: ThemeProps) => theme.typography.body.family};
	margin: 0 0 ${({ theme }: ThemeProps) => theme.layout.baseSpacing * 1.5}rem;
}

p {
	max-width: 75ch;
	margin : 0 0 ${({ theme }: ThemeProps) => theme.layout.baseSpacing}rem;
}

.sr {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	border: 0;
}

em,
i {
	font-style: italic;
}

strong,
b {
	font-weight: 700;
}


h1, h2, h3, h4,h5, h6, label {
	font-weight: ${({ theme }: ThemeProps) => theme.typography.heading.family};
	font-family: ${({ theme }: ThemeProps) => theme.typography.heading.weight};
	line-height: ${({ theme }: ThemeProps) => theme.typography.heading.lineHeight};
}

h1 {
	font-size: 1.8em;
	line-height: 1.5;
	margin-bottom: 0.75em;
}

h2 {
	font-size: 1.25em;
	line-height: 1;
	margin-bottom: 1em;
	margin-top: 1.5rem;
}

h3 {
	font-size: 1em;
	line-height: 1.5;
	margin-bottom: 0.5rem;
}

div{
	padding: 0px;
	margin:0px;
}

code,pre{
	font-weight: ${({ theme }: ThemeProps) => theme.typography.mono.family};
	font-family: ${({ theme }: ThemeProps) => theme.typography.mono.weight};
	line-height: ${({ theme }: ThemeProps) => theme.typography.mono.lineHeight};
}

`;

export default GlobalStyles;
