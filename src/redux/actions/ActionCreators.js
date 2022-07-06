// import tất cả các biến trong ActionTypes;
import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../../shared/baseUrl';

// Fetch staff từ baseUrl
export const fetchStaffs = () => (dispatch) => {
    // staffLoading bắt đầu tải khi đang trong quá trình fetch lấy dữ liệu 
    dispatch(staffsLoading(true));
    // return json() và dispatch addStaff nếu thành công, nếu không thì bắt lỗi và return errMess.
    // localhost/staffs
    return fetch(baseUrl + "staffs")
        //  Nhận response từ server và handle response từ server có thể là lỗi 
        .then((response) => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error(
                    "Error" + response.status + ":" + response.statusText
                );
                error.response = response;
                throw error;
            }
        },
            // Handle error
            (error) => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((staffs) => dispatch(addStaffs(staffs)))
        .catch(error => dispatch(staffsFailed(error.message)));
};

export const addStaffs = (staffs) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staffs
});

export const staffsLoading = () => ({
    type: ActionTypes.SALARY_LOADING
});

export const staffsFailed = (errMess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errMess,
});

// Fetch Department từ baseUrl
export const fetchDepartments = () => (dispatch) => {
    dispatch(departmentsLoading(true));

    return fetch(baseUrl + 'departments')
        .then((response) => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error("Error" + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            (error) => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((departments) => dispatch(addDepartments(departments)))
        .catch((error) => dispatch(departmentsFailed(error.message)));
};

export const addDepartments = (departments) => ({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: departments
});

export const departmentsLoading = () => ({
    type: ActionTypes.DEPARTMENTS_LOADING
});

export const departmentsFailed = (errMess) => ({
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: errMess
});


// Fetch Staff of Department từ baseUrl
export const fetchDeptStaffs = (deptId) => (dispatch) => {
    dispatch(deptStaffsLoading(true));

    return fetch(baseUrl + 'departments/' + deptId)
        .then((response) => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error("Error" + response.status + ":" + response.statusText);
                error.response = response;
                throw error;
            }
        },
            (error) => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((staffs) => dispatch(addDeptStaffs(staffs)))
        .catch((error) => dispatch(DeptStaffsFailed(error.message)));
};

export const addDeptStaffs = (staffs) => ({
    type: ActionTypes.ADD_DEPTSTAFFS,
    payload: staffs
});

export const deptStaffsLoading = () => ({
    type: ActionTypes.DEPTSTAFFS_LOADING,
});

export const DeptStaffsFailed = (errMess) => ({
    type: ActionTypes.DEPTSTAFFS_FAILED,
    payload: errMess
});


//  Fetch Salary từ baseUrl
export const fetchSalary = () => (dispatch) => {
    dispatch(salaryLoading(true));
    return fetch(baseUrl + 'staffsSalary')
        .then((response) => {
            if (response.ok) {
                return response;
            } else {
                var error = Error('Erros' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            (error) => {
                var errMess = Error(error.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((salary) => dispatch(addSalary(salary)))
        .catch((error) => dispatch(salaryFailed(error.message)));
};

export const addSalary = (salary) => ({
    type: ActionTypes.ADD_SALARY,
    payload: salary
});

export const salaryLoading = () => ({
    type: ActionTypes.SALARY_LOADING
});

export const salaryFailed = (errMess) => ({
    type: ActionTypes.SALARY_FAILED,
    payload: errMess
});




