import * as React from "react";
const { useContext, useReducer, createContext, useState, useEffect, useRef } = React;
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyselfTitle from "./first/myself_title";
import MyselfLogo from "./first/myself_logo";
import Award from "./award/award";
import Activity from "./activity/activity";
import Belong from "./belong/belong";
import Background from "./background/myself_background";

const Myself = () => {
  const backgroundDivElement = useRef<HTMLDivElement>(null);

  const expandLifetimeArea = (showLifetime: boolean, action: { referencePoint: number; scrollY: number }) => {
    console.log(action);

    if (!showLifetime && action.referencePoint < action.scrollY) {
      console.log("下へ");
      return true;
    }
    if (showLifetime && action.scrollY < action.referencePoint) {
      console.log("上へ");
      return false;
    }
    return showLifetime;
  };

  const [showLifetime, dispatchLifetimeArea] = useReducer(expandLifetimeArea, false);
  const scroll = (event: Event) => {
    // const referencePoint = backgroundDivElement.current.clientHeight;
    const referencePoint = 20;
    console.log(backgroundDivElement.current.scrollHeight, referencePoint);
    const scrollY = window.scrollY;
    dispatchLifetimeArea({ referencePoint: referencePoint, scrollY: scrollY });
  };

  useEffect(() => {
    document.addEventListener("scroll", scroll);
    return () => {
      document.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <div className="myself-div">
      <div className={"myself-background-div" + (showLifetime ? " -visible" : "")} ref={backgroundDivElement}>
        <Background />
      </div>
      <div className="myself-first-div">
        <MyselfTitle />
        <MyselfLogo />
      </div>
      <div className="myself-lifetime-div">
        <Belong />
        <Award />
        <Activity />
      </div>
    </div>
  );
};

export default Myself;
