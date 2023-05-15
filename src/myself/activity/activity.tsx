
import * as React from 'react';
const { useContext, useReducer, createContext } = React;
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";
// 経歴・学歴

const ActivityParts = (props:{title:string , details:string}) => {
    return (<div><p>{props.title}</p><p>{props.details}</p></div>)
}

const Activity = () => {
    return <div className='award-div'>
        <ActivityParts title="プログラミング講師" details=""/>
        <ActivityParts title="未踏ジュニア" details=""/>
        <ActivityParts title="技育CAMP" details=""/>
    </div>
}

export default Activity