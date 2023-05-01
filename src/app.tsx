import exp from 'constants';
import * as React from 'react';
const { useContext, useReducer, createContext } = React;
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MySelf from "./myself/myself"

const App = () => {
    return <><MySelf/></>
}

export default App