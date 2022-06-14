import React, { useState } from "react";
import { Link } from "react-router-dom";
// staff là một object nên khi truyền làm props phải dùng dấu ngoặc nhọn
const RenderStaffList = ({ staff }) => (
    // dùng arrow function return ngay 
    <Link to={`/staff/${staff.id}`} className="text-center text-decoration-none">
        <div className="card border-success mt-3 mb-3 shadow ">
            <img
                src={staff.image}
                alt={staff.name}
                className="card-img-top"
            />
            <div className="card-body">
                <h5>{staff.name}</h5>
            </div>
        </div>
    </Link>

)
// Lưu số cột vào biến cols
const cols = [
    {
        name: "Một Cột",
        classColumn: "col-12"
    },
    {
        name: "Hai Cột",
        classColumn: "col-6"
    },
    {
        name: "Ba Cột",
        classColumn: "col-6 col-md-4 col-lg-4"
    },
    {
        name: "Bốn Cột",
        classColumn: "col-6 col-md-3 col-lg-3"
    },
    {
        name: "Sáu Cột",
        classColumn: "col-6 col-md-2 col-lg-2"
    }
]
// Tạo StaffList presentation 
const StaffList = (props) => {
    const [column, setColumn] = useState("col-6 col-md-4 col-lg-2 mt-3 mb-3");
    const [name, setName] = useState("");
    const [sortId, setSortId] = useState();

    const staffList = props.staffs
        // Sử dụng sort() để sắp xếp tên theo bảng chữ cái từ A-Z
        .sort((a, b) => sortId ? a.id - b.id : b.id - a.id)
        // Sử dụng filter() để tìm kiếm
        .filter((staff) => {
            //  nếu không nhập gì vào ô input thì giữ nguyên
            if (name === "") {
                return staff;
                // Chuyển tên staff.jsx thành chữ thường, phương thức includes xem giá trị nhập vào input có tìm thấy trong chuỗi staff.jsx 
                // Nếu trùng trả về staff mới, Nếu không thì không trả về lại gì
            } else if (staff.name.toLowerCase().includes(name.toLowerCase())) {
                return staff;
            }
            return 0;
        })

        .map((staff) => {
            return (
                // Dùng hàm map() để đi qua tất cả các object trong mảng STAFFS
                <div key={staff.id} className={column}>
                    <RenderStaffList staff={staff} />
                </div>
            )
        })
    //  Dùng hàm map() để đi qua các object của mảng cols
    const changeColumn = cols.map((col) => (
        <option
            key={col.classColumn}
            value={col.classColumn}
        >
            {col.name}
        </option>
    ))

    return (
        <div className="container">
            <h4 className="mt-2">Nhân Viên</h4>
            <div className="btn-group col-12 ">
                <select
                    className="custom-select btn btn-success text-white "
                    // 
                    onChange={e => setColumn(e.target.value)}
                >
                    <option>Chọn số cột trình bày</option>
                    {changeColumn}
                </select>
                <button
                    className="btn btn-success border "
                    onClick={() => setSortId(!sortId)}
                >
                    Sắp xếp nhân viên theo ID
                </button>
                <input
                    className="btn btn-success border text-white"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Tìm kiếm nhân viên"
                >
                </input>
            </div>
            <div className="row shadow mt-5 mb-5">
                {staffList}
            </div>
        </div>
    )
}

export default StaffList;