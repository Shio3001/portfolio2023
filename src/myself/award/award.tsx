
import * as React from 'react';
const { useContext, useReducer, createContext } = React;
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyselfExplanation from "./../myself_explanation"


const Award = () => {
    return <div className='award-div'>
        <h3>表彰</h3>
        <MyselfExplanation title="N・S高等学校令和4年度卒業式 特別表彰" details=""/>
        <MyselfExplanation title="未踏ジュニア スーパークリエーター 表彰" details=""/>
    </div>
}

export default Award