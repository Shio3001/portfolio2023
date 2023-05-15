
import * as React from 'react';
const { useContext, useReducer, createContext } = React;
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const AwardParts = (props:{title:string , details:string}) => {
    return (<div><p>{props.title}</p><p>{props.details}</p></div>)
}

const Award = () => {
    return <div className='award-div'>
        <AwardParts title="N・S高等学校令和4年度卒業式 特別表彰" details=""/>
    </div>
}

export default Award