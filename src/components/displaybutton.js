import React from 'react';
import './displaybutton.css';

class displayButton extends React.Component{

    constructor(props) {
        super(props);
        this.isHorizontal = this.props.isHorizontal;
        this.horizontalClassName = "smallButton";
        this.verticalClassName = "boldSmallButton";
    }

    render() {
    if(this.isHorizontal) {
        this.horizontalClassName = "smallButton";
        this.verticalClassName = "boldSmallButton";
    }
    else{
        this.horizontalClassName = "boldSmallButton";
        this.verticalClassName = "smallButton";
    }

        return (
            <div className={"buttonContainersCol"}>
                <div className={"buttonContainersRow"}>
                    <button className={this.horizontalClassName} onClick={this.props.onClick}>⸬</button>
                    <button className={this.verticalClassName} onClick={this.props.onClick}>⁞</button>
                </div>
            </div>
        );
    }
}

export default displayButton;