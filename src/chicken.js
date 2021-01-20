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

// type 0 1 2 represent middlechicken type 3 4 5 represent largechicken  6 represent smallchicken
const chickenFWList = [mychickenFW]
const chickenFWJsonList = [mychickenFWJson]
const chickenBWList = [mychickenBW]
const chickenBWJsonList = [mychickenBWJson]
const chickenEATList = [mychickenEAT]
const chickenEATJsonList = [mychickenEATJson]

// import {eaten} from './axios';

const ChickenFW = (props) => {
  const [frames, setFrames] = useState([])
  const willMount = useRef(true);

  const loadSpritesheet = () => {
    if(props.stage == 0){
      const baseTexture = PIXI.BaseTexture.from(chickenFWList[6]);
      const spritesheet = new PIXI.Spritesheet(baseTexture, chickenFWJsonList[6]);
      spritesheet.parse(() => {
          setFrames( Object.keys(spritesheet.textures).map((frame) => spritesheet.textures[frame]));
      });
    }
    else if(props.stage == 1){
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
  const willMount = useRef(true);
  // const handlestatus = async() => {
  //   const checkFull = await eaten(username);

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

  if (willMount.current) {
      loadSpritesheet();
      willMount.current = false;
  }

  useTick(delta => {
      counter += delta;
      if (counter >= 200) {
            const newfoodarr = [...props.foodarr]
            const newfoodposarr = [...props.foodposarr]
            newfoodarr.shift() // remove first element
            newfoodposarr.shift()
            props.setFoodArr(newfoodarr)
            props.setFoodPosArr(newfoodposarr)
            props.setHunger(props.hunger + 10)
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
        // onComplete={handlestatus()}
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

