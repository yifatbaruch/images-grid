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
            };
        this.horizontalClassName = "smallButton";
        this.verticalClassName = "boldSmallButton";
        this.imagesClassName = "horizontalImages";
    }

    chooseRandIndex(length){
        return(Math.floor(Math.random()* length));
    }

    applyImages(){
        let images = [];
        for(let i = 0; i < 5; ++i){
            let index = this.chooseRandIndex(this.state.rawData.length);
            images[i] = (this.state.rawData[index]);
        }
        return(images);
    }

   componentDidMount(){
        fetch('https://api.jonathanczyzyk.com/api/v1/images/small', {
            method: 'GET', // or 'PUT'
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

    horizontalDisplay(){
        this.setState({isHorizontal: true});
        this.horizontalClassName = "smallButton";
        this.verticalClassName = "boldSmallButton";
        this.imagesClassName = "horizontalImages";
    }

    verticalDisplay(){
        this.setState({isHorizontal: false});
        this.horizontalClassName = "boldSmallButton";
        this.verticalClassName = "smallButton";
       this.imagesClassName = "verticalImages";
    }

    render() {

        if (!this.state.isFetchingReady) {
            return (null);
        }
        return(
            <>
                <DisplayButton horizontalClick={() => this.horizontalDisplay()}
                               horizontalClassName={this.horizontalClassName}
                               verticalClick={() => this.verticalDisplay()}
                               verticalClassName={this.verticalClassName}/>
                <div className={"app"}>
                    <Images images={this.state.images} class={this.imagesClassName}/>
                    <RefreshButton onClick={() => this.setState({images: this.applyImages()})}/>
                </div>
            </>
        );
    }
}

export default App;
