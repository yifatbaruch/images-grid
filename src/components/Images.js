import React from 'react';
import './Images.css';
import Image from './Image.js';

class Images extends React.Component{
    render(){
    return(
            <div className={this.props.class}>
                <Image  src={this.props.images[0]}/>
                <Image  src={this.props.images[1]}/>
                <Image  src={this.props.images[2]}/>
                <Image  src={this.props.images[3]}/>
                <Image  src={this.props.images[4]}/>
            </div>
        );
    }
}

export default Images;