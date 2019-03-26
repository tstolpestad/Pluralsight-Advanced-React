import React, {PureComponent} from 'react';
import storeProvider from './storeProvider';


class Timestamp extends PureComponent {
    static timedisplay = timestamp =>  timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

    render() {
        return (
            <div>
                {this.props.timestamp}
            </div>
        );
    }
}

const extraProps = (store)=> {
    return {
        timestamp: Timestamp.timedisplay(store.getState().timestamp)
    };
};

export default storeProvider(extraProps)(Timestamp);