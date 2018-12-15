import * as React from 'react';

import { Icon } from '../toaster.helpers';

import { Message, StatusIconContainer, ToasterShortContainer } from './toaster-short.styles';

import { ToasterTypes } from '../../toaster.constants';

interface IToasterProps {
    message: React.ReactChild;
    type: ToasterTypes;
}

const ToasterShort: React.FC<IToasterProps> = props => (
    <ToasterShortContainer type={props.type}>
        <StatusIconContainer type={props.type}>
            <Icon type={props.type} />
        </StatusIconContainer>
        <Message>{props.message}</Message>
    </ToasterShortContainer>
);

export default ToasterShort;
