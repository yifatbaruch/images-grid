import React from 'react';
import './Images.css';
import Image from './Image.js';

function Images (props){

    let isHorizontal = props.isHorizontal;
    let imagesClassName;

    if(isHorizontal){
        imagesClassName = "horizontalImages";
    }
    else{
        imagesClassName = "verticalImages";
    }

    return(
        <div data-testid={"container"} className={imagesClassName}>
            <Image  src={props.images[0]}/>
            <Image  src={props.images[1]}/>
            <Image  src={props.images[2]}/>
            <Image  src={props.images[3]}/>
            <Image  src={props.images[4]}/>
        </div>
    );

}

export default Images;