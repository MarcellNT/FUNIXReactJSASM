import { createStore, combineReducers, applyMiddleware } from "redux";
import { Staffs } from "./reducers/staffs";
import { Departments } from "./reducers/departments";
import { Salary } from "./reducers/salary";
import { DeptStaffs } from "./reducers/deptstaffs";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs,
            departments: Departments,
            deptStaffs: DeptStaffs,
            salary: Salary,
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
};
