import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import assertUnreachable from '../helpers/assertUnreachable';
import { useTimeout } from '../hooks/useTimeout';
import { copyStatusState } from '../state/timeState';
import Theme from '../types/theme';
import ThemeProps from '../types/themeProps';

const displayDuration = 5_000;
const transitionDuration = 400;

interface StatusWrapProps {
	error: boolean;
	copied: boolean;
}

interface StatusWrapPropsFn extends StatusWrapProps {
	theme: Theme;
}

function getColor({ theme, error }: StatusWrapPropsFn): string {
	if (error) {
		return theme.colors.error.color.hex;
	}
	return theme.colors.primary.color.hex;
}

const StatusWrap = styled.div<StatusWrapProps>`
	--color: ${getColor};
	position: fixed;

	bottom: -3rem;
	right: ${({ theme }: ThemeProps) => theme.layout.baseSpacing}rem;
	border: 1px solid var(--color);
	color: var(--color);
	padding: ${({ theme }: ThemeProps) => theme.layout.baseSpacing * 0.25}rem ${({ theme }: ThemeProps) => theme.layout.baseSpacing}rem;
	transition: ${transitionDuration / 1000}s bottom ease-out;
	background: ${({ theme }: ThemeProps) => theme.colors.background.hex};

	&.open {
		bottom: ${({ theme }: ThemeProps) => theme.layout.baseSpacing}rem;
		transition: ${transitionDuration / 1000}s bottom ease-in;
	}
`;

export default function Status() {
	const [status, setStatus] = useRecoilState(copyStatusState);
	const text = useMemo(() => {
		if (status) {
			if (status === 'copied') {
				return 'Copied to clipboard.';
			} else if (status === 'error') {
				return 'Error copying to clipboard.';
			}
			assertUnreachable(status);
		}
		return 'foo';
	}, [status]);
	const [open, setOpen] = useState(status !== null);

	useEffect(() => {
		setOpen(status !== null);
	}, [status]);

	const close = useCallback(() => setOpen(false), [setOpen]);
	const clear = useCallback(() => setStatus(null), [setStatus]);

	useTimeout(close, displayDuration, [status]);
	useTimeout(clear, transitionDuration + displayDuration, [status]);

	const openClass = useMemo(() => (open ? 'open' : 'closed'), [open]);

	return (
		<StatusWrap className={openClass} error={status === 'error'} copied={status === 'copied'}>
			{text}
		</StatusWrap>
	);
}
