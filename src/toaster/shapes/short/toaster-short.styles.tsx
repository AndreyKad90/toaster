import styled from 'styled-components';

import { getColorByToasterType } from '../toaster.helpers';
import { ToasterTypes } from '../../toaster.constants';

export const StatusIconContainer = styled.div`
    display: flex;
    align-items: center;

    padding: 0.25em 0.5em;
    background-color: ${(props: { type: ToasterTypes }) => getColorByToasterType(props.type)};

    svg {
        width: 2.2em;
        height: 2.2em;
        fill: #ffffff;
    }
`;

export const Message = styled.div`
    display: flex;
    align-items: center;
    padding: 0.25em 0.5em;
`;

export const ToasterShortContainer = styled.div`
    width: 12.5em;
    display: flex;
    overflow: hidden;
    background-color: #ffffff;
    word-break: break-all;

    border-radius: 6px;
    border-width: 2px;
    border-style: solid;
    border-color: ${(props: { type: ToasterTypes }) => getColorByToasterType(props.type)};
`;
