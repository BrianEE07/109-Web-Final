import { Stage, PixiComponent, Container, Sprite, AnimatedSprite, useTick, useApp} from '@inlet/react-pixi'
import React, { Component, useState, useRef, useEffect} from 'react';
import * as PIXI from 'pixi.js';
import Food from './food.js'
import mychickenFW from './img/mychicken/mychickenFW.png'
import mychickenFWJson from './img/mychicken/mychickenFW.json'
import mychickenBW from './img/mychicken/mychickenBW.png'
import mychickenBWJson from './img/mychicken/mychickenBW.json'
import mychickenEAT from './img/mychicken/mychickenEAT.png'
import mychickenEATJson from './img/mychicken/mychickenEAT.json'

import icebirdFW from './img/icebird/icebirdFW.png'
import icebirdFWJson from './img/icebird/icebirdFW.json'
import icebirdBW from './img/icebird/icebirdBW.png'
import icebirdBWJson from './img/icebird/icebirdBW.json'
import icebirdEAT from './img/icebird/icebirdEAT.png'
import icebirdEATJson from './img/icebird/icebirdEAT.json'

import fatchickenFW from './img/fatchicken/fatchickenFW.png'
import fatchickenFWJson from './img/fatchicken/fatchickenFW.json'
import fatchickenBW from './img/fatchicken/fatchickenBW.png'
import fatchickenBWJson from './img/fatchicken/fatchickenBW.json'
import fatchickenEAT from './img/fatchicken/fatchickenEAT.png'
import fatchickenEATJson from './img/fatchicken/fatchickenEAT.json'
import mychicken_bigFW from './img/mychicken/mychickenFW.png'
import mychicken_bigFWJson from './img/mychicken/mychickenFW.json'
import mychicken_bigBW from './img/mychicken/mychickenBW.png'
import mychicken_bigBWJson from './img/mychicken/mychickenBW.json'
import mychicken_bigEAT from './img/mychicken/mychickenEAT.png'
import mychicken_bigEATJson from './img/mychicken/mychickenEAT.json'
import icebird_bigFW from './img/icebird_big/icebird_bigFW.png'
import icebird_bigFWJson from './img/icebird_big/icebird_bigFW.json'
import icebird_bigBW from './img/icebird_big/icebird_bigBW.png'
import icebird_bigBWJson from './img/icebird_big/icebird_bigBW.json'
import icebird_bigEAT from './img/icebird_big/icebird_bigEAT.png'
import icebird_bigEATJson from './img/icebird_big/icebird_bigEAT.json'
import fatchicken_bigFW from './img/fatchicken_big/fatchicken_bigFW.png'
import fatchicken_bigFWJson from './img/fatchicken_big/fatchicken_bigFW.json'
import fatchicken_bigBW from './img/fatchicken_big/fatchicken_bigBW.png'
import fatchicken_bigBWJson from './img/fatchicken_big/fatchicken_bigBW.json'
import fatchicken_bigEAT from './img/fatchicken_big/fatchicken_bigEAT.png'
import fatchicken_bigEATJson from './img/fatchicken_big/fatchicken_bigEAT.json'
import littlebirdFW from './img/littlebird/littlebirdFW.png'
import littlebirdFWJson from './img/littlebird/littlebirdFW.json'
import littlebirdBW from './img/littlebird/littlebirdBW.png'
import littlebirdBWJson from './img/littlebird/littlebirdBW.json'
import littlebirdEAT from './img/littlebird/littlebirdEAT.png'
import littlebirdEATJson from './img/littlebird/littlebirdEAT.json'
import {eat} from './chicken/axios';

// type 0 1 2 represent middlechicken type 3 4 5 represent largechicken  6 represent smallchicken
const chickenFWList = [mychickenFW, icebirdFW, fatchickenFW, mychicken_bigFW, icebird_bigFW, fatchicken_bigFW, littlebirdFW]
const chickenFWJsonList = [mychickenFWJson, icebirdFWJson, fatchickenFWJson, mychicken_bigFWJson, icebird_bigFWJson, fatchicken_bigFWJson, littlebirdFWJson]
const chickenBWList = [mychickenBW, icebirdBW, fatchickenBW, mychicken_bigBW, icebird_bigBW, fatchicken_bigBW, littlebirdBW]
const chickenBWJsonList = [mychickenBWJson, icebirdBWJson, fatchickenBWJson, mychicken_bigBWJson, icebird_bigBWJson, fatchicken_bigBWJson, littlebirdBWJson]
const chickenEATList = [mychickenEAT, icebirdEAT, fatchickenEAT, icebird_bigEAT, mychicken_bigEAT, fatchicken_bigEAT, littlebirdEAT]
const chickenEATJsonList = [mychickenEATJson, icebirdEATJson, fatchickenEATJson, mychicken_bigEATJson, icebird_bigEATJson, fatchicken_bigEATJson, littlebirdEATJson]



const ChickenFW = (props) => {
  const [frames, setFrames] = useState([])
  const willMount = useRef(true);

  const loadSpritesheet = () => {
    if(props.stage == 0){
      console.log("this is ", props.stage)
      const baseTexture = PIXI.BaseTexture.from(chickenFWList[6]);
      const spritesheet = new PIXI.Spritesheet(baseTexture, chickenFWJsonList[6]);
      spritesheet.parse(() => {
          setFrames( Object.keys(spritesheet.textures).map((frame) => spritesheet.textures[frame]));
      });
    }
    else if(props.stage == 1){
      console.log("this issssssss ", props.stage)
      const baseTexture = PIXI.BaseTexture.from(chickenFWList[props.type]);
      const spritesheet = new PIXI.Spritesheet(baseTexture, chickenFWJsonList[props.type]);
      spritesheet.parse(() => {
          setFrames( Object.keys(spritesheet.textures).map((frame) => spritesheet.textures[frame]));
      });
    }
    else if (props.stage == 2){
      const baseTexture = PIXI.BaseTexture.from(chickenFWList[props.type + 3]);
      const spritesheet = new PIXI.Spritesheet(baseTexture, chickenFWJsonList[props.type + 3]);
      spritesheet.parse(() => {
          setFrames( Object.keys(spritesheet.textures).map((frame) => spritesheet.textures[frame]));
      });
    }
  }

  if (willMount.current) {
      loadSpritesheet();
      willMount.current = false;
  }

  useTick(delta => {
    props.setPositionX(props.positionX + 1)

    if (props.positionX > props.width / 2 - props.chickensize) {
      props.setState('backward')
    }  
    if(props.foodposarr.length) {
        let x = Math.round((props.foodposarr[0][0] - props.chickensize) / 2);
        if (x < 0) 
            x = 0;
        else if (x >= Math.round((props.width) / 2 - props.chickensize))
            x = Math.round((props.width) / 2 - props.chickensize);

        if (props.positionX === x) {
            props.setState('eating')
        }
        else if (props.positionX > x) {
            props.setState('backward')
        }
    }
  })

  if (frames.length === 0) {
    return null;
  }
  
  return(
    <AnimatedSprite
        animationSpeed={0.1}
        isPlaying={true}
        textures={frames}
        height={props.chickensize}
        width={props.chickensize}
        x={props.positionX} 
        y={props.positionY}
    />
  )
}


const ChickenBW = (props) => {
  const [frames, setFrames] = useState([])
  const willMount = useRef(true);

  const loadSpritesheet = () => {
    if(props.stage == 0){
      const baseTexture = PIXI.BaseTexture.from(chickenBWList[6]);
      const spritesheet = new PIXI.Spritesheet(baseTexture, chickenBWJsonList[6]);
      spritesheet.parse(() => {
          setFrames( Object.keys(spritesheet.textures).map((frame) => spritesheet.textures[frame]));
      });
    }
    else if(props.stage == 1){
      const baseTexture = PIXI.BaseTexture.from(chickenBWList[props.type]);
      const spritesheet = new PIXI.Spritesheet(baseTexture, chickenBWJsonList[props.type]);
      spritesheet.parse(() => {
          setFrames( Object.keys(spritesheet.textures).map((frame) => spritesheet.textures[frame]));
      });
    }
    else if (props.stage == 2){
      const baseTexture = PIXI.BaseTexture.from(chickenBWList[props.type + 3]);
      const spritesheet = new PIXI.Spritesheet(baseTexture, chickenBWJsonList[props.type + 3]);
      spritesheet.parse(() => {
          setFrames( Object.keys(spritesheet.textures).map((frame) => spritesheet.textures[frame]));
      });
    }
  }

  if (willMount.current) {
      loadSpritesheet();
      willMount.current = false;
  }

  useTick(delta => {
    props.setPositionX(props.positionX - 1)

    if (props.positionX <= 0) {
      props.setState('forward')
    }
    if(props.foodposarr.length) {
        let x = Math.round((props.foodposarr[0][0] - props.chickensize) / 2);
        if (x < 0) 
            x = 0;
        else if (x >= Math.round((props.width) / 2 - props.chickensize)) {
            x = Math.round((props.width) / 2 - props.chickensize);
        }

        if (props.positionX === x) {
            props.setState('eating')
        }
        else if (props.positionX < x) {
            props.setState('forward')
        }
    }
    
  })

  if (frames.length === 0) {
    return null;
  }
  

  return(
    <AnimatedSprite
        animationSpeed={0.1}
        isPlaying={true}
        textures={frames}
        height={props.chickensize}
        width={props.chickensize}
        x={props.positionX} 
        y={props.positionY}
    />
  )
}

const ChickenEAT = (props) => {
  const [frames, setFrames] = useState([])
  const [data, setData] = useState([])
  const willMount = useRef(true);
  // const handlestatus = async() => {
  //   const checkFull = await eat({username: props.user, hunger: props.hunger,health: props.health, message: 'return'});

  // }
  let counter = 0
  const loadSpritesheet = () => {
    if(props.stage == 0){
      const baseTexture = PIXI.BaseTexture.from(chickenEATList[6]);
      const spritesheet = new PIXI.Spritesheet(baseTexture, chickenEATJsonList[6]);
      spritesheet.parse(() => {
          setFrames( Object.keys(spritesheet.textures).map((frame) => spritesheet.textures[frame]));
      });
    }
    else if(props.stage == 1){
      const baseTexture = PIXI.BaseTexture.from(chickenEATList[props.type]);
      const spritesheet = new PIXI.Spritesheet(baseTexture, chickenEATJsonList[props.type]);
      spritesheet.parse(() => {
          setFrames( Object.keys(spritesheet.textures).map((frame) => spritesheet.textures[frame]));
      });
    }
    else if (props.stage == 2){
      const baseTexture = PIXI.BaseTexture.from(chickenEATList[props.type + 3]);
      const spritesheet = new PIXI.Spritesheet(baseTexture, chickenEATJsonList[props.type + 3]);
      spritesheet.parse(() => {
          setFrames( Object.keys(spritesheet.textures).map((frame) => spritesheet.textures[frame]));
      });
    }
  }

  useEffect(async ()=> {
    const checkFull = await eat({account: props.user, hunger: props.hunger,health: props.health, message: 'return'});
    setData(checkFull);
    console.log("ferjgiehjfi", checkFull[0])
  },[])
  if (willMount.current) {
      loadSpritesheet();
      willMount.current = false;
      
  }

  useTick( async (delta) => {
      counter += delta;
      
       
      if (counter >= 100) {
            const newfoodarr = [...props.foodarr]
            const newfoodposarr = [...props.foodposarr]
            newfoodarr.shift() // remove first element
            newfoodposarr.shift()
            props.setFoodArr(newfoodarr)
            props.setFoodPosArr(newfoodposarr)
            props.setHunger(data[0].hunger)
            props.setHealth(data[0].health)
            props.setStage(data[0].stage)
           
            props.setState('forward')
            // axios.get('/eating').then((res) => setHunger(res.data))
      }
  })
  
  if (frames.length === 0) {
      return null;
    }

  return(
    <AnimatedSprite
        animationSpeed={0.05}
        isPlaying={true}
        textures={frames}
        height={props.chickensize}
        width={props.chickensize}
        x={props.positionX} 
        y={props.positionY}
    />
  )
}

const Chicken = (props) => {
  const [positionX, setPositionX] = useState(0)
  const [positionY, setPositionY] = useState(0)
  const [foodarr, setFoodArr] = useState([])
  const [foodposarr, setFoodPosArr] = useState([])
  const [foodId, setFoodId] = useState(0)
  const [state, setState] = useState('forward')

  useEffect(() => {
    if(props.stage == 3){
      setState('dead')
    }
  },[props.stage])

  useEffect(() => {
      setPositionY(Math.round(props.height / 3.6))
  }, [props.height])

  useEffect(() => {
    if (props.foodpos[1] < 2 * Math.round(props.height / 3.6) + 2 * Math.sqrt(props.height * props.width) / 10) {
        setFoodArr([...foodarr, genNewFood()])
        setFoodPosArr([...foodposarr, [props.foodpos[0], props.foodpos[1]]])
    }
  }, [props.foodpos])

  const genNewFood = () => {
    console.log(`gen ${foodarr.length} food x=${props.foodpos[0]}, y=${props.foodpos[1]}`)
    const conf = {
        foodId: foodId,
        x: props.foodpos[0],
        y: props.foodpos[1],
        foodsize: Math.sqrt(props.height * props.width) / 80,
        floorpos: positionY + Math.sqrt(props.height * props.width) / 10
    }
    setFoodId(foodId + 1);
    return conf;
  }

  const chooseState = () => {
    switch(state) {
        case 'forward':
            return(
            <ChickenFW 
                positionX={positionX} 
                positionY={positionY} 
                height={props.height}
                width={props.width}
                chickensize={Math.sqrt(props.height * props.width) / 10}
                foodposarr={foodposarr}
                setPositionX={setPositionX} 
                setState={setState}
                type ={props.type}
                stage={props.stage}
            />
            );
        case 'backward':
            return(
            <ChickenBW 
                positionX={positionX} 
                positionY={positionY} 
                height={props.height}
                width={props.width}
                chickensize={Math.sqrt(props.height * props.width) / 10}
                foodposarr={foodposarr}
                setPositionX={setPositionX} 
                setState={setState}
                type={props.type}
                stage={props.stage}
            />
            );
        case 'eating':
            return(
            <ChickenEAT 
                positionX={positionX} 
                positionY={positionY} 
                chickensize={Math.sqrt(props.height * props.width) / 10}
                foodarr={foodarr}
                foodposarr={foodposarr}
                hunger={props.hunger}
                setFoodArr={setFoodArr}
                setFoodPosArr={setFoodPosArr}
                setHunger={props.setHunger}
                setState={setState}
                health={props.health} 
                hunger={props.hunger} 
                happiness={props.happiness} 
                setHealth={props.setHealth} 
                setHunger={props.setHunger} 
                setHappiness={props.setHappiness}
                type={props.type}
                stage={props.stage}
                user={props.user}
                setStage={props.setStage}
            />
            );
            case 'dead':
              return(
                <></>
              )
    }
  }

  return (
  <Stage height={props.height / 2} width={props.width / 2} options={{transparent: true}}>
    <Container position={[0, 0]}>
    {chooseState()}
    {foodarr.map(ele => (
        <Food
            key={ele.foodId}
            {...ele}
        />
    ))}
    </Container>
  </Stage>)
};

export default Chicken;


