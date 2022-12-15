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

const url = process.env.NEXT_PUBLIC_URL ?? '';
const name = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Reboot When';
const description = 'A quick tool to copy a reboot command for rebooting at a specific time.';
const descriptionLong =
	'This is a quick utility to help reboot a server at a specific time. Specify a time and then copy the command to the clipboard. If you are rebooting a lot of servers, you can fuzz the results by a set number of minutes to stagger reboot times.';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<Head>
				<link rel="manifest" href="manifest.json" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content={name} />
				<meta name="format-detection" content="telephone=no" />
				<meta name="mobile-web-app-capable" content="yes" />

				<meta name="msapplication-config" content="/browserconfig.xml" />
				<meta name="msapplication-TileColor" content="#bbe1fa" />
				<meta name="msapplication-tap-highlight" content="no" />
				<meta name="theme-color" content="#1B262C" />

				<link rel="apple-touch-icon" href="/icon-180.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/icon-180.png" />
				<link rel="apple-touch-icon" sizes="167x167" href="/icon-168.png" />
				<link rel="mask-icon" href="/icon-mono.svg" color="#bbe1fa" />
				<link rel="shortcut icon" href="/favicon.ico" />

				<link rel="canonical" href={url} />
				<meta name="description" content={description} />
				<meta property="og:type" content="article" />
				<meta property="og:title" content={name} />
				<meta property="og:description" content={descriptionLong} />
				<meta property="og:image" content="/og.png" />
				<meta property="og:url" content={url} />
				<meta property="og:site_name" content={name} />
				<meta name="twitter:title" content={name} />
				<meta name="twitter:description" content={descriptionLong} />
				<meta name="twitter:image" content="/og.png" />
				<meta name="twitter:creator" content="@rblackman24" />
				<meta name="theme-color" content="#bbe1fa" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main className={`${noto.className} ${cairo.className} ${rubik.className}`}>
				<RecoilRoot>
					<Component {...pageProps} />
				</RecoilRoot>
			</main>
		</ThemeProvider>
	);
}
