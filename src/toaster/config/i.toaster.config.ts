export interface IToasterConfig {
    containerId: string;
    autoCloseDuration?: number;
    newestOnTop?: boolean;
    closeOnClick?: boolean;
    transitionTime?: number | [number, number];
}
