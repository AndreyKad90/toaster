import * as React from 'react';

// components
import { Icon } from '../toaster.helpers';

// types
import { ToasterTypes } from '../../toaster.constants';

import { Text, StatusIconContainer, CloseButtonContainer, ToasterBannerContainer } from './toaster-banner.styles';

interface IToasterBannerProps {
    type: ToasterTypes;
    onClose: () => void;
}

const ToasterBanner: React.FC<IToasterBannerProps> = props => (
    <ToasterBannerContainer type={props.type}>
        <StatusIconContainer>
            <Icon type={props.type} />
        </StatusIconContainer>
        <Text>{props.children}</Text>
        <CloseButtonContainer onClick={props.onClose}>
            X
        </CloseButtonContainer>
    </ToasterBannerContainer>
);

export default ToasterBanner;
