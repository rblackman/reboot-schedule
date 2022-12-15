import { ChangeEvent, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { rebootTimeState } from '../state/timeState';
import ThemeProps from '../types/themeProps';

const TimeWrap = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	justify-content: stretch;
`;

const TimeLabel = styled.label`
	font-size: 1.2rem;
	margin-bottom: ${({ theme }: ThemeProps) => theme.layout.baseSpacing * 0.25}rem;

	@media only screen and (max-width: 700px) {
		font-size: 1rem;
	}
`;

export default function TimeSelector() {
	const [time, setTime] = useRecoilState(rebootTimeState);

	const onChange = useCallback(
		({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
			setTime(value);
		},
		[setTime]
	);

	return (
		<TimeWrap>
			<TimeLabel htmlFor="time">Reboot Time</TimeLabel>
			<input id="time" type="time" required value={time} onChange={onChange} aria-controls="command" />
		</TimeWrap>
	);
}
