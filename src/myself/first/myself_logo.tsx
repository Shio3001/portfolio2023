import * as React from "react";
const { useContext, useReducer, createContext } = React;
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import CommonSNSLink from "./../../common/snslink"

const MyselfLogo = () => {
  return (
    <div className="myself-logo-div">
      <div className="myself-logo-out">
        <div className="myself-logo-in">
          <div className="myself-logo-shape">
            
          </div>
          <CommonSNSLink icon={""} text={"Twitter"}/>
        </div>
      </div>
    </div>
  );
};

export default MyselfLogo;
