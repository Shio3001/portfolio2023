

import * as React from 'react';
const { useContext, useReducer, createContext } = React;
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Background = () => {
    return <div className='myself-background-div-out'>
        <div className='myself-background-div-in'>
        
        </div>
    </div>
}

export default Background