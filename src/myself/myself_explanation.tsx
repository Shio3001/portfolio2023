
import * as React from 'react';
const { useContext, useReducer, createContext } = React;
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";
const MyselfExplanation = (props:{title:string , details:string}) => {
    return (<div>
        <h4>{props.title}</h4>
        <h5>{props.details}</h5>
      </div>)
}

export default MyselfExplanation