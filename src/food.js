import { Stage, PixiComponent, Container, Sprite, AnimatedSprite, useTick, useApp} from '@inlet/react-pixi'
import React, { Component, useState, useRef, useEffect} from 'react';
import * as PIXI from 'pixi.js';
import food from './img/food/food1.png'

const Food = (props) => {
    const [positionX, setPositionX] = useState((props.x - props.foodsize) / 2)
    const [positionY, setPositionY] = useState((props.y - props.foodsize) / 2)

    useTick(delta => {
        if (positionY < props.floorpos){
            setPositionY(positionY + 8 * delta)
        }
    })

    return (
        <Sprite 
            image={food} 
            x={positionX} 
            y={positionY}
            height={props.foodsize} 
            width={props.foodsize}
        />
    )
}

export default Food