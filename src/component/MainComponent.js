import React, { Component } from "react";
import StaffList from "./StaffsListComponent";
import {STAFFS} from "../shared/staffs";

// Tạo class Main Component container
class Main extends Component {
    constructor(props) {
        super(props)
        {/* this gọi class Main Component*/}
        this.state = {
            staffs: STAFFS
        }
    }
    render() {
        return(
            <div className=" container">
                {/* gán staffs = this.state.staffs lấy giá trị của nó */}
                <StaffList staffs={this.state.staffs}/>
            </div>
        )
    }
}
export default Main;
