
import * as React from 'react';
const { useContext, useReducer, createContext } = React;
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";
// 経歴・学歴
import MyselfExplanation from "./../myself_explanation"


const Belong = () => {
    return <div className='activity-div'>
        <h3>経歴</h3>
        <MyselfExplanation title="学校法人角川ドワンゴ学園 N中等部" details="2019年度 N中等部は学校教育法第一条に基づかない学校"/>
        <MyselfExplanation title="学校法人角川ドワンゴ学園 N高等学校" details="2020年度入学 2022年度卒業"/>
        <MyselfExplanation title="プログラミング講師" details="2021年秋入職~2022年夏退職"/>
    </div>
}

export default Belong