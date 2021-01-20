import { Stage, PixiComponent, Container, Sprite, AnimatedSprite, useTick, useApp} from '@inlet/react-pixi'
import React, { Component, useState, useRef, useEffect} from 'react';
import * as PIXI from 'pixi.js';
import Food from './food.js'
import mychickenFW from './fatchicken.png'
import mychickenFWJson from './fatchicken.json'
import mychickenBW from './img/mychicken/mychickenBW.png'
import mychickenBWJson from './img/mychicken/mychickenBW.json'
import mychickenEAT from './eatchicken.png'
import mychickenEATJson from './eatchicken.json'



const ChickenFW = (props) => {
  const [frames, setFrames] = useState([])
  const willMount = useRef(true);

  const loadSpritesheet = () => {
      const baseTexture = PIXI.BaseTexture.from(mychickenFW);
      const spritesheet = new PIXI.Spritesheet(baseTexture, mychickenFWJson);
      spritesheet.parse(() => {
          setFrames( Object.keys(spritesheet.textures).map((frame) => spritesheet.textures[frame]));
      });
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
        else if (x >= (props.width) / 2 - props.chickensize)
            x = (props.width) / 2 - props.chickensize;

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
      const baseTexture = PIXI.BaseTexture.from(mychickenBW);
      const spritesheet = new PIXI.Spritesheet(baseTexture, mychickenBWJson);
      spritesheet.parse(() => {
          setFrames( Object.keys(spritesheet.textures).map((frame) => spritesheet.textures[frame]));
      });
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
        else if (x >= (props.width) / 2 - props.chickensize)
            x = (props.width) / 2 - props.chickensize;

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
  let counter = 0
  const loadSpritesheet = () => {
      const baseTexture = PIXI.BaseTexture.from(mychickenEAT);
      const spritesheet = new PIXI.Spritesheet(baseTexture, mychickenEATJson);
      spritesheet.parse(() => {
          setFrames( Object.keys(spritesheet.textures).map((frame) => spritesheet.textures[frame]));
      });
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
            props.setState('forward')
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
                setFoodArr={setFoodArr}
                setFoodPosArr={setFoodPosArr}
                setState={setState}
            />
            );
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

