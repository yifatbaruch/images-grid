import React from 'react';
import './Image.css';


function Image(props){
    return(

        <div >
            <img className = {"image"} src={props.src.url} alt={"blabla"}/>
            <div className={"textDisplay"}>
                    <p>{props.src.description}</p>
                    <p>🖤{props.src.likes}</p>
            </div>
        </div>
    );
}

export default Image;