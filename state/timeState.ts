import dayjs from 'dayjs';
import { atom, selector } from 'recoil';

export const currentTimeState = atom<Date>({
	key: 'currentTimeState',
	default: new Date()
});

export const roundedTimeSelector = selector<Date>({
	key: 'roundedTimeSelector',
	get: ({ get }) => {
		const now = dayjs(get(currentTimeState));
		const remainder = 30 - (now.minute() % 15);
		return now.add(remainder, 'minute').toDate();
	}
});

export const rebootTimeState = atom<string>({
	key: 'rebootTimeState',
	default: '04:00:00'
});

export const fuzzSecondsState = atom<number>({
	key: 'fuzzSecondsState',
	default: 0
});

export const rebootDateSelector = selector<Date>({
	key: 'rebootDateSelector',
	get: ({ get }) => {
		const time = get(rebootTimeState);
		const currentTime = get(roundedTimeSelector);

		const now = dayjs(currentTime);
		const date = dayjs(`${now.format('YYYY-MM-DD')} ${time}`, 'YYYY-MM-DD HH:mm:ss');

		if (date.isBefore(now)) {
			return date.add(1, 'day').toDate();
		}
		return date.toDate();
	}
});

export const secondsUntilRebootSelector = selector<number>({
	key: 'secondsUntilRebootSelector',
	get: ({ get }) => {
		const now = dayjs(get(roundedTimeSelector));
		const reboot = dayjs(get(rebootDateSelector));
		const seconds = Math.abs(now.diff(reboot, 'second'));
		const round = seconds % 60;
		return seconds - round;
	}
});

export const cmdRebootSelector = selector<string>({
	key: 'cmdRebootSelector',
	get: ({ get }) => {
		const secondsUntilReboot = get(secondsUntilRebootSelector);
		return `shutdown /r /t ${secondsUntilReboot}`;
	}
});

export const copyStatusState = atom<'copied' | 'error' | null>({
	key: 'copyStatusState',
	default: null
});
