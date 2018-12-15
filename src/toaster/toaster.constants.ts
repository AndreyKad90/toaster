export type ToasterTypes = 'positive' | 'negative' | 'warning';

export const TOASTER_TYPES: { [key: string]: ToasterTypes } = {
    POSITIVE: 'positive',
    WARNING: 'warning',
    NEGATIVE: 'negative'
};

export const TOASTER_SHAPES = {
    BANNER: 'banner',
    SHORT: 'short',
    LONG: 'long'
};

const BASE_CSS_CLASS = 'sitegen_toaster';
export const CSS = {
    BASE_CLASS: BASE_CSS_CLASS,
    ANIMATIONS: {
        SLIDE_DOWN: `${BASE_CSS_CLASS}__slide-down`,
        SLIDE_UP_FADE_IN: `${BASE_CSS_CLASS}__slide-up-fade-in`,
        FADE_OUT: `${BASE_CSS_CLASS}__fade-out`
    }
};

export const TOASTER_EVENTS = {
    ADD_TOAST: 'ADD TOAST'
};

export const TOASTER_CONTAINERS = {
    TOP: 'TOP',
    SIDE: 'SIDE'
};

export const TRANSITION_TYPE = {
    ENTER: 'START',
    EXIT: 'EXIT'
};
