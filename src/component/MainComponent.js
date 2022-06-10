import React, { Component } from "react";
import StaffList from "./StaffListComponent";
import { STAFFS } from "../shared/staffs";


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staffs: STAFFS
        }
    }

    render() {
        return (
            <div>
                <StaffList staffs={this.state.staffs}/>    
            </div>
        )
    }
}
export default Main;
