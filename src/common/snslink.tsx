import * as React from "react";
const { useContext, useReducer, createContext } = React;
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const CommonSNSLink = (props: { icon: string; text: string }) => {
  return (
    <div className="common-snslink">
      <div className="sns-icon">
        <div className={props.icon}></div>
      </div>
      <div className="sns-text">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default CommonSNSLink;
