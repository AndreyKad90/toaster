import styled from 'styled-components';

import { TOASTER_TYPES, ToasterTypes } from '../../toaster.constants';

export const StatusIconContainer = styled.div`
    display: flex;
    align-items: center;
    background: #ffffff;
    padding-left: 0.4em;
    padding-right: 0.4em;

    svg {
        width: 1.5em;
        height: 1.5em;
    }
`;

export const ToasterBannerContainer = styled.div`
    display: flex;
    min-height: 2.25em;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);
    word-break: break-all;

    ${(props: { type: ToasterTypes }) => {
        switch (props.type) {
            case TOASTER_TYPES.POSITIVE:
                return `
                        background: #00daaa;
                        
                        ${StatusIconContainer} {
                            svg {
                                fill: #00daaa;
                            }
                        }
                    `;
            case TOASTER_TYPES.NEGATIVE:
                return `
                        background: #da2b00;
                        
                        ${StatusIconContainer} {
                            svg {
                                fill: #da2b00;
                            }
                        }
                    `;
            case TOASTER_TYPES.WARNING:
                return `
                        background: #d99100;
                        
                        ${StatusIconContainer} {
                            svg {
                                fill: #d99100;
                            }
                        }
                    `;
            default:
                return ``;
        }
    }};
`;

export const Text = styled.div`
    color: #ffffff;
    display: flex;
    align-items: center;
    padding-left: 0.5em;
`;

export const CloseButtonContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    padding-left: 0.4em;
    padding-right: 0.4em;
    cursor: pointer;

    svg {
        width: 1em;
        height: 1em;
        fill: #ffffff;
    }
`;
