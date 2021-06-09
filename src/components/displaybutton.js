import React from 'react';
import './displaybutton.css';

class displayButton extends React.Component{
    render() {
        return (
            <div className={"buttonContainersCol"}>
                <div className={"buttonContainersRow"}>
                    <button className={this.props.horizontalClassName} onClick={this.props.horizontalClick}>⸬</button>
                    <button className={this.props.verticalClassName} onClick={this.props.verticalClick}>⁞</button>
                </div>
            </div>
        );
    }
}

export default displayButton;