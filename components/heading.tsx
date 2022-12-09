const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Reboot Schedule';

export default function Heading() {
	return <h1>{siteName}</h1>;
}
