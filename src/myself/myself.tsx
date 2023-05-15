import * as React from "react";
const { useContext, useReducer, createContext } = React;
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyselfTitle from "./first/myself_title";
import MyselfLogo from "./first/myself_logo"
import Award from "./award/award";
import Activity from "./activity/activity";
import Belong from "./belong/belong";
import Backgground from "./background/myself_background";

const Myself = () => {
  return (
    <div className="myself-div">
      <div className="myself-background-div">
        <Backgground />
      </div>
      <div className="myself-first-div">
        <MyselfTitle />
        <MyselfLogo/>
      </div>
      <div className="myself-move-div">
        <Belong />
        <Award />
        <Activity />
      </div>
    </div>
  );
};

export default Myself;
