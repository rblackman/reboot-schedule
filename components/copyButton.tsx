import { useCallback } from 'react';
import { MdContentCopy } from 'react-icons/md';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import randomInterval from '../helpers/randomInterval';
import { copyStatusState, fuzzSecondsState, secondsUntilRebootSelector } from '../state/timeState';
import ThemeProps from '../types/themeProps';

const Button = styled.button`
	width: 1.5rem;
	height: 1.5rem;
	background-color: ${({ theme }: ThemeProps) => theme.colors.background.hex};
	color: ${({ theme }: ThemeProps) => theme.colors.primary.color.hex};
	border: none;
	font-size: 1.5rem;
	-webkit-appearance: none;
`;

export default function CopyButton() {
	const fuzz = useRecoilValue(fuzzSecondsState);
	const seconds = useRecoilValue(secondsUntilRebootSelector);
	const setCopyStatus = useSetRecoilState(copyStatusState);

	const onClick = useCallback(async () => {
		if (typeof window !== 'undefined') {
			const fuzzSeconds = randomInterval(fuzz) * 60;
			const totalSeconds = seconds + fuzzSeconds;
			const text = `shutdown /r /t ${totalSeconds}`;
			try {
				await navigator.clipboard.writeText(text);
				setCopyStatus('copied');
			} catch (ex) {
				setCopyStatus('error');
			}
		}
	}, [fuzz, seconds, setCopyStatus]);

	return (
		<Button onClick={onClick} aria-label="Copy to Clipboard">
			<MdContentCopy />
		</Button>
	);
}
