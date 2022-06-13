import React, { useState } from "react";
//  render ra giao diện 
const RenderStaffList = ({ staff }) => (
    // // staff là một object nên khi truyền vào phải có dấu ngoặc nhọn
    <div className="card border-danger mt-3 mb-3 shadow">
        <img
            src={staff.image}
            alt={staff.name}
            className="card-img-top"
        />
        <div className="card-body">
            <h5>{staff.name}</h5>
        </div>
    </div>

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
//  Nhận props từ MainComponent
const StaffList = (props) => {
    // Sử dụng phương thức useState để thay đổi giao diện cột 
    const [column, setColumn] = useState("col-6 col-md-4 col-lg-2 mt-3 mb-3");
    //  Sử dụng phương thức useState để thay đổi giao diện thứ tự theo tên sắp xếp từ A-Z và ngược lại
    const [name, setName] = useState("");

    const [sortId, setSortId] = useState();
    // Đặt tên biến staffList = props.staffs truy cập vào trong lấy giá trị bên trong mảng
    const staffList = props.staffs  
        .sort((a, b) => sortId ? a.id - b.id : b.id - a.id)  
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
        // Dùng hàm map đi qua tất cả các object trong staffs
        .map((staff) => {
            return (
                <div key={staff.id} className={column}>
                    <RenderStaffList staff={staff} />
                </div>
            )
        })
        // Dùng hàm map lọc qua các object của cols
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
            <div className="btn-group col-12">
                {/* Lựa chọn sắp xếp cột */}
                <select
                    className="custom-select btn btn-success border text-white"
                    // Khi chọn số cột thì set lại column
                    onChange={e => setColumn(e.target.value)}
                >
                    <option>Chọn số cột trình bày</option>
                    {/* Nhận biến changeColumn */}
                    {changeColumn}
                </select>
                {/* Khi click vào button sẽ thay đổi thứ tự tên từ A-Z và ngược lại  */}
                <button
                    className="btn btn-success border"
                    // Khi click 
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
            <div className="row  shadow mt-5 mb-5">
                {/* Nhận biến staffList  */}
                {staffList}
            </div>

        </div>
    )
}

export default StaffList;