import * as React from "react";
const { useContext, useReducer, createContext } = React;
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import CommonSNSLink from "./../../common/snslink";

const MySelfie = (props: { situation: boolean }) => {
  return (
    <div className="myself-selfie-div">
      <div className="myself-selfie-out">
        <div className={"myself-selfie-in" + (props.situation ? " -collapse" : " -expand")}>
          <div className="myself-selfie-img"></div>
        </div>
      </div>
    </div>
  );
};

export default MySelfie;
