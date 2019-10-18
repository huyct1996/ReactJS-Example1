import React from 'react';
import './Welcome.css';
import checkImg from '../img/check.png';
import checkDoneImg from '../img/check-done.png';
import PropTypes from 'prop-types';

class Welcome extends React.Component {
    render() {
        let className = "Welcome";
        let { item, onClick } = this.props;
        let url = checkDoneImg;
        if(item.isComplete) {
            className += " Welcome-complete";
            url = checkImg;
        }
        return(
            <div className={className}>
                <img onClick={onClick} src={url} alt="Hình" width={32}/>
                <p>{this.props.item.name}</p>
            </div>
        )
    }
}

Welcome.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        isComplete: PropTypes.bool
    }),
    onClick: PropTypes.func
};

export default Welcome;