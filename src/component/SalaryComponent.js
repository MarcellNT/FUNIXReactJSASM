import React, {useState} from "react";
//  gán giá trị vì không nên truyền trực tiếp giá trị fix trực tiếp 
const basicSalary = 300000;
const overTimeSalary = 200000;
// salary là object nên khi truyền props sẽ ở trong dấu ngoặc vuông
const RenderSalary = ({ salary }) => {
    return (
        <div className="card border-success mt-3 mb-3 shadow">
            <div className="card-body">
                <h5 className="card-title">{salary.name}</h5>
                <p className="card-text">{`Mã nhân viên: ${salary.id}`}</p>
                <p className="card-text">{`Hệ số lương: ${salary.salaryScale}`}</p>
                <p className="card-text">{`Giờ làm thêm: ${salary.overTime}`}</p>
                {/* Tính lương */}
                {/* dùng toFixed để chỉ lấy giá trị trước số 0 */}
                <p className="card-text">{`Lương: ${(salary.salaryScale * basicSalary + salary.overTime * overTimeSalary).toFixed(0)}`}</p>
            </div>
        </div>
    )
}
const Salary = (props) => {
    // dùng phương thức usaState để thay đổi trạng thái của state 
    const [sortSalary, setSoftSalary] = useState();
    const salary = props.staffs
        .sort((a, b) => sortSalary ? a.salaryScale - b.salaryScale : b.salaryScale - a.salaryScale)
        //  dùng map() 
        .map((salary) => {
            return (
                <div
                    key={salary.id}
                    className="col-12 col-md-4 col-lg-2 mt-2 mb-2"
                >
                    {/* gọi hàm RenderSalary */}
                    <RenderSalary salary={salary} />
                </div>
            )
        })
    return (
        <div className="container">
            <button
                className="btn btn-success"
                // Khi click vào thì set lại lương từ cao xuống thấp hoặc ngược lại
                onClick={() => setSoftSalary(!sortSalary)}
            >
                Sắp xếp theo hệ số lương
            </button>
            <div className="row shadow mb-3 mt-3">
                {salary}
            </div>
        </div>
    )
}
export default Salary;