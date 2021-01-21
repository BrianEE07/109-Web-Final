import './App.css';
import React, { useEffect, useRef, useState } from 'react';

const client = new WebSocket('ws://chickenkeeper.herokuapp.com/')

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
    
    const sendGameStart = (account) => {
        sendData({message: "Login", account: account});
    }

    const sendLogOut = (account) => {
        sendData({message: "Logout", account: account});
    }

    return {
        wsmessage,
        sendGameStart,
        sendLogOut
    }
}


export default WSClient;