import './App.css';
import React, { useEffect, useRef, useState } from 'react';

const client = new WebSocket('ws://localhost:4001')

const WSClient = () => {
    const [wsmessage, setWSMessage] = useState({})

    // receive Stage or Hun/Hp message
    client.onmessage = (mes) => {
        const { data } = mes;
        const { type, value } = JSON.parse(data);
        setWSMessage({type, value});
    }

    const sendData = (data) => {
        client.send(JSON.stringify(data));
    }
    
    const sendFirstStart = (account) => {
        sendData({message: "Initialize", account: account});
    }

    return {
        wsmessage,
        sendFirstStart
    }
}


export default WSClient;