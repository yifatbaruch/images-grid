import React from 'react';
import './App.css';
import Images from './components/Images.js';
import DisplayButton from './components/displaybutton.js';
import RefreshButton from'./components/refreshButton.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFetchingReady:false,
            isHorizontal:true,
            rawData:[],
            images:[]
        };
        this.imagesClassName = "horizontalImages";
    }

    chooseRandIndex(length){
        return(Math.floor(Math.random()* length));
    }

    applyImages(){
        let images = [];
        let length = this.state.rawData.length;
        for(let i = 0; i < 5; ++i){
            let index = this.chooseRandIndex(length);
            images[i] = (this.state.rawData[index]);
            let temp = this.state.rawData[index];
            this.state.rawData[index] = this.state.rawData[length - 1];
            this.state.rawData[length - 1] = temp;
            --length;

        }
        return(images);
    }

    componentDidMount(){
        fetch('https://api.jonathanczyzyk.com/api/v1/images/small', {
            method: 'GET',
            headers: {
                'x-api-key': 'api-key-6eed70cd-be94-49ca-8aba-3febf300b989',
            },
        })
            .then((response) => response.json())
            .then(data => this.setState({rawData: data}))
            .then(()=> this.setState({images: this.applyImages()}))
            .then(()=> this.setState({isFetchingReady:true}))
            .catch(error => console.warn(error));
    }

    render() {

        if (!this.state.isFetchingReady) {
            return null;
        }

        if(this.state.isHorizontal){
            this.imagesClassName = "horizontalImages";
        }
        else{
            this.imagesClassName = "verticalImages";
        }
        return(
            <>
                <DisplayButton isHorizontal = {this.state.isHorizontal} onClick={() => this.setState(prevState=>
                    ({isHorizontal: !prevState.isHorizontal}))}/>
                <div className={"app"}>
                    <Images images={this.state.images} class={this.imagesClassName}/>
                    <RefreshButton onClick={() => this.setState({images: this.applyImages()})}/>
                </div>
            </>
        );
    }
}

export default App;