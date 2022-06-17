import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Salary from "./SalaryComponent";
import StaffList from "./StaffsListComponent";
import StaffDetail from "./StaffDetailComponent";
import Department from "./DepartmentComponent";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
// Trong phiên bản react 17 không support phương thức match nên phải sử dụng sang phương thức userParams
// Lúc này sử dụng phương thức Number thay vì paresint()
function StaffWithId({ staffs }) {
    // nhận staffs làm props
    const { staffId } = useParams();
    return (
        <StaffDetail
            staff={staffs.filter((staff) => staff.id === Number(staffId))[0]}
        />
    )
}
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
                        path="/staff/:staffId"
                        element={<StaffWithId staffs={this.state.staffs} />}
                    // staffId so sánh với staff.id 
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
