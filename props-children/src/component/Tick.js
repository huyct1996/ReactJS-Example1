import React from 'react';
import './Tick.css';

class Tick extends React.Component {
    constructor() {
        super();
        this.state = {
            currentOption: true
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            currentOption: !this.state.currentOption
        })
    }

    render() {
        let className = "Tick";
        let { header, children } = this.props;
        let { currentOption } = this.state;
        return(
            <div className={className}>
                <h2 onClick={this.onClick}>{header}</h2>
                { !currentOption && <p>{children}</p> }
            </div>
        )
    }
}

export default Tick;