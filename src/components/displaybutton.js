import React from 'react';
import './displaybutton.css';

function displayButton(props){

        let isHorizontal = props.isHorizontal;
        let horizontalClassName;
        let verticalClassName;

        if(isHorizontal) {
            horizontalClassName = "smallButton";
            verticalClassName = "boldSmallButton";
        }
        else{
            horizontalClassName = "boldSmallButton";
            verticalClassName = "smallButton";
        }

        return (
            <div className={"buttonContainersCol"}>
                <div className={"buttonContainersRow"}>
                    <button className={horizontalClassName} onClick={props.onClick}>⸬</button>
                    <button className={verticalClassName} onClick={props.onClick}>⁞</button>
                </div>
            </div>
        );

}

export default displayButton;