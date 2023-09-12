import styled, { css } from 'styled-components';
import { palette } from '../../js/vars/palette';

const { base, borders } = palette();

const Styled = styled.div`
	background-color: ${base['white']};
	border: 1px solid ${borders['default']};
	border-radius: 3px;
	padding: 22px;
`;

export default function Card({ children, height }) {
	return <Styled className="card">{children}</Styled>;
}
