import * as React from "react";
const { useContext, useReducer, createContext } = React;
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const MyselfTitle = () => {
  return (
    <div className="myself-title">
      <h1>しおのあそびば</h1>
    </div>
  );
};

export default MyselfTitle;
