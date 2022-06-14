import React, { Component } from "react";
import StaffList from "./StaffsListComponent";
import Department from "./DepartmentComponent";
import Salary from "./SalaryComponent";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import { Navigate, Route, Routes, useParams } from 'react-router-dom';


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
    // React 17 không support Switch và Redirect nên chuyển qua Routes và Navigate, route cũng sử dụng element thay vì component
    render() {
        return (
            <div>
                <Header />
                <Routes>
                    {/* gán staffs = this.state.staffs lấy giá trị của nó */}
                    <Route
                        path="/staff"
                        element={<StaffList staffs={this.state.staffs} />}
                    />
                    <Route
                        path="/department"
                        element={<Department departments={this.state.departments} />}
                    />
                    <Route
                        path="/salary"
                        element={<Salary staffs={this.state.staffs} />}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/staff" />}
                    />
                </Routes>
                <Footer />
            </div>
        )
    }
}
export default Main;
