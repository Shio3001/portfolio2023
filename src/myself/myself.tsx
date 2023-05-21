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
import MySelfie from "./selfie/selfie";
const Myself = () => {
  const backgroundDivElement = useRef<HTMLDivElement>(null);

  const expandLifetimeArea = (situation: boolean, action: { referencePoint: number; scrollY: number }) => {
    console.log(action);

    if (!situation && action.referencePoint < action.scrollY) {
      console.log("下へ");
      return true;
    }
    if (situation && action.scrollY < action.referencePoint) {
      console.log("上へ");
      return false;
    }
    return situation;
  };

  const [situation, dispatchLifetimeArea] = useReducer(expandLifetimeArea, false);
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
      <div className={"myself-background-div"} ref={backgroundDivElement}>
        <div className={"myself-background-div-out" + (situation ? " -collapse" : " -expand")}>
          <Background />
        </div>
        <MySelfie situation={situation} />
      </div>
      <div className="myself-first-div">
        <MyselfTitle />
        <MyselfLogo />
      </div>
      <div className="myself-lifetime-div">
        <div className="myself-lifetime-div-flex">
          <div className="myself-lifetime-div-left">
            <Belong />
            <Activity />
          </div>
          <div className="myself-lifetime-div-right">
            <Award />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myself;
