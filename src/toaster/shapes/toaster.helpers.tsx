import * as React from 'react';

import { TOASTER_TYPES, ToasterTypes } from '../toaster.constants';


const getIconGlyphByType = (type: ToasterTypes) => {
    switch (type) {
        case TOASTER_TYPES.POSITIVE:
            return `(icon ${TOASTER_TYPES.POSITIVE})`;
        case TOASTER_TYPES.NEGATIVE:
            return `(icon ${TOASTER_TYPES.NEGATIVE})`;
        case TOASTER_TYPES.WARNING:
            return `(icon ${TOASTER_TYPES.WARNING})`;
        default:
            return `(icon ${TOASTER_TYPES.POSITIVE})`;
    }
};

export const Icon: React.FC<{ type: ToasterTypes }> = props => <h1>{getIconGlyphByType(props.type)}</h1>;

export function getColorByToasterType(type: ToasterTypes): string {
    switch (type) {
        case TOASTER_TYPES.POSITIVE:
            return `#00daaa`;
        case TOASTER_TYPES.NEGATIVE:
            return `#da2b00`;
        case TOASTER_TYPES.WARNING:
            return `#d99100`;
        default:
            return ``;
    }
}
