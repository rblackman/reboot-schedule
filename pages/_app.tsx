/* eslint-disable react/jsx-props-no-spreading */
import { Cairo_Play, Noto_Sans_Mono, Rubik } from '@next/font/google';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyles';
import Theme from '../styles/theme';

const noto = Noto_Sans_Mono({ subsets: ['latin'] });
const cairo = Cairo_Play({ subsets: ['latin'] });
const rubik = Rubik({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${noto.className} ${cairo.className} ${rubik.className}`}>
				<RecoilRoot>
					<Component {...pageProps} />
				</RecoilRoot>
			</main>
		</ThemeProvider>
	);
}
