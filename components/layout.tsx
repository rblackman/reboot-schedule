import FuzzSelector from './fuzz';
import Heading from './heading';
import Intro from './intro';
import Reboot from './reboot';
import Status from './status';
import TimeSelector from './timeSelector';
import TimeSubscriber from './timeSubscriber';

export default function Layout() {
	return (
		<>
			<Heading />
			<Intro />
			<TimeSelector />
			<FuzzSelector />
			<Reboot />
			<Status />
			<TimeSubscriber />
		</>
	);
}
