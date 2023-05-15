import * as React from "react";
const { useContext, useReducer, createContext } = React;
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// 経歴・学歴

import MyselfExplanation from "./../myself_explanation"


const Activity = () => {
  return (
    <div className="activity-div">
      <h3>活動</h3>
      <MyselfExplanation title="プログラミング講師" details="" />
      <MyselfExplanation title="未踏ジュニア" details="" />
      <MyselfExplanation title="技育CAMP" details="" />
    </div>
  );
};

export default Activity;
