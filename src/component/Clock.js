import React from 'react'
import { useState } from 'react';


export default function Clock() {
    let time = new Date().toLocaleTimeString();
    const [currTime, setCurrTime] = useState(time);


    setInterval(() => {
        time = new Date().toLocaleTimeString();
        setCurrTime(time);

    }, 1000);

    return (
        <div className="clock">
            <h1>{currTime}</h1>
            <p>credit: Sachin Prajapati</p>
        </div>
    )
}
