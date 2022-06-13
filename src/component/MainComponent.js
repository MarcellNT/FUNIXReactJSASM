import React, { Component } from "react";
// import presentation StaffList
import StaffList from "./StaffListComponent";
import { STAFFS } from "../shared/staffs";

// Tạo class component container Main 
class Main extends Component {
    constructor(props) {
        super(props)
        // từ khóa this chính là gọi class Main 
        this.state = {
            // STAFFS chính là một biến bên trong là một mảng có chứa các object 
            staffs: STAFFS
        }
    }

    render() {
        return (
            // this.state.staffs chính là gọi biến state bên trong class Main lấy key staffs 
            <div>
                <StaffList staffs={this.state.staffs}/>    
            </div>
        )
    }
}
export default Main;
