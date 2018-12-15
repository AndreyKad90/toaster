import { TOASTER_CONTAINERS } from '../toaster.constants';
import { IToasterConfig } from './i.toaster.config';
import { DEFAULT_CONFIG } from './default.config';

export const TOP_CONTAINER_CONFIG: IToasterConfig = {
    ...DEFAULT_CONFIG,
    containerId: TOASTER_CONTAINERS.TOP,
    newestOnTop: true
};
