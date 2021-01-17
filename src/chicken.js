import { Stage, PixiComponent, Container, Sprite, AnimatedSprite, useTick, useApp} from '@inlet/react-pixi'
import React, { Component, useState, useRef, useEffect} from 'react';
import * as PIXI from 'pixi.js';
import mychickenFW from './img/mychicken/mychickenFW.png'
import mychickenFWJson from './img/mychicken/mychickenFW.json'
import mychickenBW from './img/mychicken/mychickenBW.png'
import mychickenBWJson from './img/mychicken/mychickenBW.json'

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
    if (props.positionX > 300) {
      props.setWalkDir('backward')
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
        height={70}
        width={70}
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
      props.setWalkDir('forward')
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
        height={70}
        width={70}
        x={props.positionX} 
        y={props.positionY}
    />
  )
}

const Chicken = (props) => {
  const [positionX, setPositionX] = useState(0)
  const [positionY, setPositionY] = useState(130)
  const [walkdir, setWalkDir] = useState('forward')

  return (
  <Stage x={200} y={200} height={250} width={370} options={{transparent: true}}>
    <Container position={[0, 0]}>
    {(walkdir === 'forward') 
    ? 
    <ChickenFW 
      positionX={positionX} 
      positionY={positionY} 
      setPositionX={setPositionX} 
      setWalkDir={setWalkDir}
      />
    :
    <ChickenBW 
      positionX={positionX} 
      positionY={positionY} 
      setPositionX={setPositionX} 
      setWalkDir={setWalkDir}
      />
    }
    </Container>
  </Stage>)
};

export default Chicken;

