import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { cmdRebootSelector } from '../state/timeState';
import ThemeProps from '../types/themeProps';
import CopyButton from './copyButton';

const RebootWrap = styled.div`
	display: flex;
	flex-flow: row nowrap;
	max-width: 30rem;
	align-items: center;
	border: 1px solid ${({ theme }: ThemeProps) => theme.colors.primary.color.hex};
	border-radius: ${({ theme }: ThemeProps) => theme.layout.baseSpacing * 0.25}rem;
	padding: ${({ theme }: ThemeProps) => theme.layout.baseSpacing * 0.25}rem ${({ theme }: ThemeProps) => theme.layout.baseSpacing}rem;
`;

const RebootText = styled.code`
	flex: 1 1 auto;
	margin-right: ${({ theme }: ThemeProps) => theme.layout.baseSpacing}rem;
	font-size: 1.4rem;

	@media only screen and (max-width: 700px) {
		font-size: 1rem;
	}
`;

export default function Reboot() {
	const cmdReboot = useRecoilValue(cmdRebootSelector);
	return (
		<RebootWrap id="command">
			<RebootText>{cmdReboot}</RebootText>
			<CopyButton />
		</RebootWrap>
	);
}
