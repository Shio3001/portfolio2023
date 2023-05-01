import exp from 'constants';
import * as React from 'react';
const { useContext, useReducer, createContext } = React;
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";


const MyselfTitle = () => {
    return <h2>しおのあそびば</h2>
}

export default MyselfTitle