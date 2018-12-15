import styled from 'styled-components';

import { ToasterTypes } from '../../toaster.constants';

import { getColorByToasterType } from '../toaster.helpers';

export const StatusIconContainer = styled.div`
    display: flex;
    padding: 0 0.5em;

    svg {
        width: 2.2em;
        height: 2.2em;
        fill: ${(props: { type: ToasterTypes }) => getColorByToasterType(props.type)};
    }
`;

export const Title = styled.div`
    padding: 0.5em 0.5em 0 0;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
`;

export const Message = styled.div`
    padding: 0.25em 0.5em 0.5em 0.5em;
`;

export const ToasterLongContainer = styled.div`
    width: 12.5em;
    background-color: #ffffff;
    border-radius: 6px;
    border-width: 2px;
    border-style: solid;
    border-color: ${(props: { type: ToasterTypes }) => getColorByToasterType(props.type)};
    word-break: break-all;
`;
