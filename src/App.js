import React from "react";
import Main from "./component/MainComponent";
import { BrowserRouter } from "react-router-dom";
// Su dung BrowserRouter su dung bo dinh tuyen History API cua HTML5 de giu giao dien nguoi dung dong bo voi URL
// BrowserRouter la thanh phan me luu tru bao tat ca cac thanh phan khac ben trong
function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Main />
      </div>
    </BrowserRouter>
  )
}

export default App;