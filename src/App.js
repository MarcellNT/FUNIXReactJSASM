import React from "react";
import Main from "./component/MainComponent";
import './App.css';
import { BrowserRouter } from "react-router-dom";
// Sử dụng BrowserRouter sử dụng bộ định tuyết History API của HTML để giữ giao diện người dùng đồng bộ với URL 
// BrowserRouter là thành phần cha  lưu trữ bao tất cả các thành phần khác bên trong 
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