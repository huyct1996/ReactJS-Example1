import React from 'react';
import './Welcome.css';
import checkImg from '../img/check.png';
import checkDoneImg from '../img/check-done.png';

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

export default Welcome;