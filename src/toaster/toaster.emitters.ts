import EventEmitter from './event.emitter';
import { TOASTER_CONTAINERS } from './toaster.constants';

export const TOASTER_EMITTERS: {
    [key: string]: EventEmitter;
} = {};

Object.values(TOASTER_CONTAINERS).forEach(container => (TOASTER_EMITTERS[container] = new EventEmitter()));
