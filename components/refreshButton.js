import React from 'react';
import './refreshButton.css';

class refreshButton extends React.Component{

    render() {
        return(
            <div className={"refreshContainer"}>
                <button className={"refreshButton"} onClick={this.props.onClick}>Refresh</button>
            </div>
        );
    }
}

export default refreshButton;