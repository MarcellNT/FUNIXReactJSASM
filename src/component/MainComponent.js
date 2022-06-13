import React, { Component } from "react";
import StaffList from "./StaffsListComponent";
import Department from "./DepartmentComponent";
import Salary from "./SalaryComponent";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";


// Tạo class Main Component container
class Main extends Component {
    //  this gọi class Main Component
    constructor(props) {
        super(props)
        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS
        }
    }
    render() {
        return (
            <div className=" container">
                {/* gán staffs = this.state.staffs lấy giá trị của nó */}
                <StaffList staffs={this.state.staffs} />
                <Department departments={this.state.departments}/>
                <Salary staffs={this.state.staffs} />
            </div>
        )
    }
}
export default Main;
