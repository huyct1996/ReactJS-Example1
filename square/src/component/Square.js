import React from 'react';
import './Square.css';
import classNames from 'classnames';

const RED = 1;
const GREEN = 3;
const YELLOW = 2;

class Square extends React.Component {
    constructor() {
        super();
        this.state = {
            color : RED
        }

        setInterval(() => {
            console.log(this.state.color);
            this.setState({
                color : this.hideNextColor(this.state.color)
            });
        }, 1000);
    }

    hideNextColor(color) {
        switch(color) {
            case RED :
                return YELLOW;
            case YELLOW :
                return GREEN;
            default:
                return RED;
        };
    }
    render() {
        const { color } = this.state;
        return(
            <div className="square">
                <div className={classNames('square-v', 'red', {
                    'active': color === RED
                })} />
                <div className={classNames('square-v', 'yellow', {
                    'active': color === YELLOW
                })} />
                <div className={classNames('square-v', 'green', {
                    'active': color === GREEN
                })} />
            </div>
        );
    }
}

export default Square;