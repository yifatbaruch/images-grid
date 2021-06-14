import React from 'react';
import './Image.css';

function Image(props){
    
    return(
        <div className={"imageContainer"}>
            <img className = {"image"} src={props.src.url} alt={"blabla"}/>
            <div className={"description"}>{props.src.description}</div>
            <p className={"textDisplay"}>🖤   {props.src.likes}</p>
        </div>
    );
}

export default Image;