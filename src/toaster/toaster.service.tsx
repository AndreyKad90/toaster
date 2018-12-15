import { TOASTER_CONTAINERS, TOASTER_EVENTS } from './toaster.constants';
import { TOASTER_EMITTERS } from './toaster.emitters';
import { TOASTER_TYPES, ToasterTypes, TOASTER_SHAPES } from './toaster.constants';
import { ToasterLong, ToasterShort, ToasterBanner } from './shapes';

function emit(container: string, props: {}, toasterType: {}, toastId: string) {
    TOASTER_EMITTERS[container].emit(TOASTER_EVENTS.ADD_TOAST, { props, ToastToRender: toasterType, toastId });
}

class ToasterService {
    static showBannerToaster(type: ToasterTypes, message: string): string {
        const toastId: string = formToastId(TOASTER_SHAPES.BANNER, type, message);
        emit(TOASTER_CONTAINERS.TOP, { type, children: message }, ToasterBanner, toastId);
        return toastId;
    }

    static showLongToaster(type: ToasterTypes, title: string, message: string): string {
        const toastId: string = formToastId(TOASTER_SHAPES.LONG, type, title, message);
        emit(TOASTER_CONTAINERS.SIDE, { type, title, message }, ToasterLong, toastId);
        return toastId;
    }

    static showShortToaster(type: ToasterTypes, message: string): string {
        const toastId: string = formToastId(TOASTER_SHAPES.SHORT, type, message);
        emit(TOASTER_CONTAINERS.SIDE, { type, message }, ToasterShort, toastId);
        return toastId;
    }

    static showPositiveBannerToaster(msg: string): string {
        return ToasterService.showBannerToaster(TOASTER_TYPES.POSITIVE, msg);
    }

    static showWarningBannerToaster(msg: string): string {
        return ToasterService.showBannerToaster(TOASTER_TYPES.WARNING, msg);
    }

    static showNegativeBannerToaster(msg: string): string {
        return ToasterService.showBannerToaster(TOASTER_TYPES.NEGATIVE, msg);
    }

    static showPositiveLongToaster(title: string, msg: string): string {
        return ToasterService.showLongToaster(TOASTER_TYPES.POSITIVE, title, msg);
    }

    static showWarningLongToaster(title: string, msg: string): string {
        return ToasterService.showLongToaster(TOASTER_TYPES.WARNING, title, msg);
    }

    static showNegativeLongToaster(title: string, msg: string): string {
        return ToasterService.showLongToaster(TOASTER_TYPES.NEGATIVE, title, msg);
    }

    static showPositiveShortToaster(msg: string): string {
        return ToasterService.showShortToaster(TOASTER_TYPES.POSITIVE, msg);
    }

    static showWarningShortToaster(msg: string): string {
        return ToasterService.showShortToaster(TOASTER_TYPES.WARNING, msg);
    }

    static showNegativeShortToaster(msg: string): string {
        return ToasterService.showShortToaster(TOASTER_TYPES.NEGATIVE, msg);
    }
}

function formToastId(...args: string[]): string {
    return args.join('_');
}

export default ToasterService;
