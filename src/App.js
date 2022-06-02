import React, { Component } from 'react';
import StaffList from './component/StaffListComponent';
import { STAFFS } from './shared/staffs';


//  Tạo riêng Navbar component và sử dung nó trong App Component 
const Navbar = () => (
    <nav className='navbar bg-primary '>
        <div className="container d-flex justify-content-center">
              <span className='text-white'>
                  Ứng dụng quản lý nhân viên
              </span>
        </div>
    </nav>
)
// khởi tạo state staffs và truyền nó cho children là StaffList component
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      staffs : STAFFS
    }
  }
  // component children StaffList sẽ nhận props là state của App component
  render() {
    return (
      <div className='wrapper'>    
        <Navbar/>  
        <StaffList staffs={this.state.staffs}/>
      </div>
    )
  }

}

export default App;