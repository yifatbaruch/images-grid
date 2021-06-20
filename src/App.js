import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Images from './components/Images.js';
import DisplayButton from './components/displaybutton.js';
import RefreshButton from'./components/refreshButton.js';
import AjaxUtils from './ajaxUtils.js';

function App(){
    const [isHorizontal, setIsHorizontal] = useState(true);
    const [rawData, setRawData] = useState([]);
    const [images, setImages] = useState(null);

    const chooseRandIndex = useCallback((length)=> {
        return(Math.floor(Math.random() * length));
    },[]);

    const applyImages =  useCallback(() =>{
        let imagesArr = [];
        for(let length = rawData.length, i = 0; i < 5; ++i, --length){
            let index = chooseRandIndex(length);
            imagesArr[i] = (rawData[index]);
            //swap to end
            let temp = rawData[index];
            rawData[index] =rawData[length - 1];
            rawData[length - 1] = temp;
        }
        return imagesArr;
    },[chooseRandIndex, rawData]);

    useEffect(() =>{
        const foo = async ()=>{
            const data = await AjaxUtils.get('https://api.jonathanczyzyk.com/api/v1/images/small');
            setRawData(data);
        };
        foo();
    },[]);

    useEffect(() => {
        if (applyImages && rawData.length) {
            setImages(applyImages());
        }
    }, [applyImages, rawData]);

    if (!images) {
        return null;
    }

    return(
        <>
            <DisplayButton isHorizontal = {isHorizontal} onClick={() => setIsHorizontal(!isHorizontal)}/>
            <div className={"app"}>
                <Images images={images} isHorizontal = {isHorizontal}/>
                <RefreshButton onClick={() => setImages(applyImages())}/>
            </div>
        </>
    );
}

export default App;