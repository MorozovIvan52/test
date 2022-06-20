import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
     // <BrowserRouter>
    <div className="App">
     APP HELLO
    </div>
    //</BrowserRouter>
  );
}

type MessageType = {
    message: string;
}

const obj:MessageType = {
    message:'dima'
}

type ArrType= {
    arr:MessageType[]
}

const arr2:MessageType[] = [
    {message:'dima'}
]

const arr = [
    1,2,34,5
]


const num = 4

function HelloMessage(num: any){
    return<h1>{num}</h1>
}

HelloMessage(num)

const ByeMessage: React.FC<MessageType> = (props)=>{
    return<h1>{props.message}</h1>
}

export default App;

