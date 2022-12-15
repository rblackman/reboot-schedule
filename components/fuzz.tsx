import { ChangeEvent, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { fuzzSecondsState } from '../state/timeState';
import ThemeProps from '../types/themeProps';

const FuzzWrap = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	justify-content: stretch;
`;

const FuzzLabel = styled.label`
	font-size: 1.2rem;
	margin-bottom: ${({ theme }: ThemeProps) => theme.layout.baseSpacing * 0.25}rem;

	@media only screen and (max-width: 700px) {
		font-size: 1rem;
	}
`;

export default function FuzzSelector() {
	const [fuzz, setFuzz] = useRecoilState(fuzzSecondsState);

	const onChange = useCallback(
		({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
			setFuzz(parseInt(value));
		},
		[setFuzz]
	);

	return (
		<FuzzWrap>
			<FuzzLabel htmlFor="fuzz">Fuzz Minutes</FuzzLabel>
			<input id="fuzz" type="number" min={0} required value={fuzz} onChange={onChange} />
		</FuzzWrap>
	);
}
