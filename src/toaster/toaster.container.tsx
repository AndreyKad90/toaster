import * as React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import * as uuid from 'uuid';

import { IToasterConfig } from './config/i.toaster.config';
import { TOASTER_EMITTERS } from './toaster.emitters';
import { TOASTER_EVENTS } from './toaster.constants';
import { DEFAULT_CONFIG } from './config/default.config';
import { CONTAINER_STYLES } from './toaster.styles';

interface IToast {
    props: object;
    ToastToRender: Function;
    toastId: string;
}

interface IToastWrapper {
    id: number;
    toast: IToast;
    dismissed: boolean;
}

interface IToasterContainerProps {
    config: IToasterConfig;
}

interface IToasterContainerState {
    toastWrappers: IToastWrapper[];
}

export default class ToasterContainer extends React.Component<IToasterContainerProps, IToasterContainerState> {

    toastIdToTimeoutId: { [key: string]: number } = {};

    constructor(props: IToasterContainerProps) {
        super(props);
        this.state = {
            toastWrappers: []
        };
    }

    componentDidMount() {
        const { config } = this.props;

        TOASTER_EMITTERS[config.containerId].on(TOASTER_EVENTS.ADD_TOAST, toast => {
            this.addToast(toast);
        });
    }

    private addToast = (toast: IToast): void => {
        const { newestOnTop } = this.props.config;
        let newToastWrappers = this.state.toastWrappers.slice();
        const wrapper = newToastWrappers.find(
            ({toast: existingToast}) => existingToast.toastId === toast.toastId
        );

        if (wrapper) {
            newToastWrappers = this.markToastAsDismissed(wrapper.id);
        }

        newToastWrappers.unshift(
            { toast, id: uuid.v1(), dismissed: false }
        );

        this.setState({
            toastWrappers: newToastWrappers
        });
    };

    private removeDismissalTimeout = (id: number): void => {
        clearTimeout(this.toastIdToTimeoutId[id]);
        delete this.toastIdToTimeoutId[id];
    };

    private markToastAsDismissed = (id: number): IToastWrapper[] => {
        return this.state.toastWrappers.map(wrapper => (
            wrapper.id === id ? {...wrapper, dismissed: true} : wrapper
        ));
    };

    private handleOnEntered = (id: number): void => {
        const { autoCloseDuration } = this.props.config;

        this.toastIdToTimeoutId[id] = setTimeout(() => {
            this.handleOnDismiss(id);
        }, autoCloseDuration);
    }

    private handleOnExited = (id: number): void => {
        const newToastWrappers = this.state.toastWrappers.filter(wrapper => wrapper.id !== id);

        this.setState({
            toastWrappers: newToastWrappers,
        });
    };

    private handleOnDismiss = (id: number): void => {
        if (this.toastIdToTimeoutId[id]) {
            this.removeDismissalTimeout(id);
        }

        this.setState({
            toastWrappers: this.markToastAsDismissed(id)
        });
    };

    private handleOnClickDismiss = (id: number): void => {
        if (this.props.config.closeOnClick) {
            this.handleOnDismiss(id);
        }
    };

    private renderToasts = (): JSX.Element[] => {
        const { containerId, transitionTime, newestOnTop } = this.props.config;
        
        return this.state.toastWrappers.map(({id, dismissed, toast}, index) => {
            const allProps = {
                ...toast.props,
                onClose: () => this.handleOnDismiss(id)
            };

            const timeout = Array.isArray(transitionTime)
                ? { enter: transitionTime[0], exit: transitionTime[1] }
                : transitionTime;
 
            const styles = {
                transform: newestOnTop 
                    ? `translateY(calc(${index * 100}% + ${index * 0.4}em)`
                    : `translateY(calc(${-index * 100}% + ${-index * 0.4}em)`
            };

            return (
                <CSSTransition
                    in={!dismissed}
                    key={id}
                    classNames={containerId}
                    timeout={timeout}
                    appear={true}
                    onEntered={(node) => this.handleOnEntered(id)}
                    onExited={(node) => this.handleOnExited(id)}
                >
                    <div
                        className={'toast-item'}
                        onClick={() => this.handleOnClickDismiss(id)}
                        style={index > 0 ? styles : undefined}
                    >
                        <toast.ToastToRender {...allProps} />
                    </div>
                </CSSTransition>
            );
        });
    };

    render() {
        const { containerId, transitionTime } = this.props.config;
        const Container = CONTAINER_STYLES[containerId];

        return (
            <Container transitionTime={transitionTime}>
                {this.renderToasts()}
            </Container>
        );
    }
}
