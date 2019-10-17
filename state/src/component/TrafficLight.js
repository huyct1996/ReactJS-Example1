import React from 'react';
import './TrafficLight.css';
import classNames from 'classnames';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class TrafficLight extends React.Component {
    render() {
        let { color } = this.props;
        return(
            <div className="TrafficLight">
                <div className={classNames('cicrle', 'red', {
                    'active': color === RED
                })} />
                <div className={classNames('cicrle', 'yellow', {
                    'active': color === YELLOW
                })} />
                <div className={classNames('cicrle', 'green', {
                    'active': color === GREEN
                })} />
            </div>
        )
    }
}

export default TrafficLight;