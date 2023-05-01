import exp from 'constants';
import * as React from 'react';
const { useContext, useReducer, createContext } = React;
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyselfTitle from './myselftitle';


const Myself = () => {
    return <div className='myselfdiv'><MyselfTitle/></div>
}

export default Myself