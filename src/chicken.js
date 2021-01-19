import { Stage, PixiComponent, Container, Sprite, AnimatedSprite, useTick, useApp} from '@inlet/react-pixi'
import React, { Component, useState, useRef, useEffect} from 'react';
import * as PIXI from 'pixi.js';
import mychickenFW from './img/icebird/icebird.png'
import mychickenFWJson from './img/icebird/icebird.json'
import mychickenBW from './img/mychicken/mychickenBW.png'
import mychickenBWJson from './img/mychicken/mychickenBW.json'
import mychickenEAT from './img/mychicken/mychickenEAT.png'
import mychickenEATJson from './img/mychicken/mychickenEAT.json'

import { setState } from 'expect';

const ChickenSize = 70;

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
    let x = Math.round((props.mouseX - ChickenSize) / 2);
    if (x < 0) 
        x = 0;
    else if (x >= (props.width) / 2 - ChickenSize)
        x = (props.width) / 2 - ChickenSize;

    if (props.positionX > props.width / 2 - ChickenSize) {
      props.setState('backward')
    }  
    if(props.clicked) {
        if (props.positionX === x) {
            props.setClicked(false)
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
        height={ChickenSize}
        width={ChickenSize}
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
    let x = Math.round((props.mouseX - ChickenSize) / 2);
    if (x < 0) 
        x = 0;
    else if (x >= (props.width - ChickenSize - 10) / 2) 
        x = (props.width - ChickenSize - 10) / 2;

    if (props.positionX <= 0) {
      props.setState('forward')
    }
    if(props.clicked) {
        if (props.positionX === x) {
            props.setClicked(false)
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
        height={ChickenSize}
        width={ChickenSize}
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
        height={ChickenSize}
        width={ChickenSize}
        x={props.positionX} 
        y={props.positionY}
    />
  )
}

const Chicken = (props) => {
  const [positionX, setPositionX] = useState(0)
  const [positionY, setPositionY] = useState(130)
  const [state, setState] = useState('forward')
  
  const chooseState = () => {
    switch(state) {
        case 'forward':
            return(
            <ChickenFW 
                positionX={positionX} 
                positionY={positionY} 
                mouseX={props.mouseX}
                mouseY={props.mouseY}
                height={props.height}
                width={props.width}
                clicked={props.clicked}
                setClicked={props.setClicked}
                setPositionX={setPositionX} 
                setState={setState}
            />
            );
        case 'backward':
            return(
            <ChickenBW 
                positionX={positionX} 
                positionY={positionY} 
                mouseX={props.mouseX}
                mouseY={props.mouseY}
                height={props.height}
                width={props.width}
                clicked={props.clicked}
                setClicked={props.setClicked}
                setPositionX={setPositionX} 
                setState={setState}
            />
            );
        case 'eating':
            return(
            <ChickenEAT 
                positionX={positionX} 
                positionY={positionY} 
                setState={setState}
            />
            );
    }
  }

  return (
  <Stage x={200} y={200} height={props.height / 2} width={props.width / 2} options={{transparent: true}}>
    <Container position={[0, 0]}>
    {chooseState()}
    </Container>
  </Stage>)
};

export default Chicken;

