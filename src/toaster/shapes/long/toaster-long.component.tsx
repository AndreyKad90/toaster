import * as React from 'react';

import { Icon } from '../toaster.helpers';

import { Title, Header, Message, StatusIconContainer, ToasterLongContainer } from './toaster-long.styles';

import { ToasterTypes } from '../../toaster.constants';

interface IToasterProps {
    title: React.ReactChild;
    message: React.ReactChild;
    type: ToasterTypes;
}

const ToasterLong: React.FC<IToasterProps> = props => (
    <ToasterLongContainer type={props.type}>
        <Header>
            <StatusIconContainer type={props.type}>
                <Icon type={props.type} />
            </StatusIconContainer>
            <Title>{props.title}</Title>
        </Header>
        <Message>{props.message}</Message>
    </ToasterLongContainer>
);

export default ToasterLong;
