import Head from 'next/head';
import Layout from '../components/layout';

const name = process.env.NEXT_PUBLIC_SITE_NAME;

export default function Index() {
	return (
		<>
			<Head>
				<title>{name}</title>
			</Head>
			<Layout />
		</>
	);
}
