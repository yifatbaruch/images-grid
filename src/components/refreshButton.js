import React from 'react';
import './refreshButton.css';

function refreshButton(props){

    return(
        <div className={"refreshContainer"}>
            <button className={"refreshButton"} onClick={props.onClick}>Refresh</button>
        </div>
    );
}

export default refreshButton;