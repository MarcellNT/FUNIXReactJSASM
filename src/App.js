import React from 'react';
import Main from './component/MainComponent';
import './index.css';


// khởi tạo state staffs và truyền nó cho children là StaffList component
function App(){
    return(
      <div className="wrapper">
        <Main/>
    </div>
    )
}
export default App;