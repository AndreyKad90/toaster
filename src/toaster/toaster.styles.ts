import * as React from 'react';
import styled from 'styled-components';

import { TOASTER_CONTAINERS, TRANSITION_TYPE } from './toaster.constants';

interface IContainerProps {
    transitionTime?: number | [number, number];
}

const TopContainer: React.FC<IContainerProps> = styled.div`
    position: absolute;
    width: 100%;
    
    .toast-item {
        position: absolute;
        width: 100%;
        margin-bottom: 1em;
        z-index: 9;
        transition-property: transform, opacity;
    }

    .${TOASTER_CONTAINERS.TOP} {
        &-appear {
            transform: translateY(-100%);
            transition-duration: ${getTransitionTime(TRANSITION_TYPE.ENTER)};

            &-active {
                transform: translateY(0%);
            }
        }

        &-enter-done {
            transition-duration: ${getTransitionTime(TRANSITION_TYPE.EXIT)}
        }

        &-exit {
            opacity: 1;
            transition-duration: ${getTransitionTime(TRANSITION_TYPE.EXIT)};

            &-active {
                opacity: 0;
            }
        }
    }
`;

const SideContainer: React.FC<IContainerProps> = styled.div`
    position: fixed;
    bottom: 1em;
    right: 1em;

    .toast-item {
        position: absolute;
        bottom: -100%;
        right: -100%;
        transition-property: transform, opacity;
    }

    .${TOASTER_CONTAINERS.SIDE} {
        &-appear {
            transform: translateY(100%);
            transition-duration: ${getTransitionTime(TRANSITION_TYPE.ENTER)};

            &-active {
                transform: translateY(0);
            }
        }

        &-enter-done {
            transition-duration: ${getTransitionTime(TRANSITION_TYPE.EXIT)}
        }

        &-exit {
            opacity: 1;
            transition-duration: ${getTransitionTime(TRANSITION_TYPE.EXIT)};

            &-active {
                opacity: 0;
            }
        }
    }
`;

export const CONTAINER_STYLES = {
    [TOASTER_CONTAINERS.TOP]: TopContainer,
    [TOASTER_CONTAINERS.SIDE]: SideContainer
};

function getTransitionTime(type: string) {
    return (props: IContainerProps) => {
        if (Array.isArray(props.transitionTime)) {
            const [enter, exit] = props.transitionTime;

            if (type === TRANSITION_TYPE.ENTER) {
                return `${enter}ms`;
            } else if (type === TRANSITION_TYPE.EXIT) {
                return `${exit}ms`;
            }
        }

        return `${props.transitionTime}ms`;
    };
}
