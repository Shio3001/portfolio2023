import * as React from "react";
const { useContext, useReducer, createContext } = React;
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyselfTitle from "./myselftitle";
import Award from "./award/award";
import Activity from "./activity/activity";
import Backgground from "./background/myself_background";

const Myself = () => {
  return (
    <div className="myself-div">

      <div className="myself-background-div">
      <Backgground />
      </div>
      <div className="myself-move-div">
        <MyselfTitle />
        <Award />
        <Activity />
      </div>
    </div>
  );
};

export default Myself;
