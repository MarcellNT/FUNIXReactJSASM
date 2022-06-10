import React, { useState } from "react";

const RenderStaffList = ({ staff }) => (

    <div className="card border-warning mt-3 mb-3 shadow">
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

const StaffList = (props) => {
    const [column, setColumn] = useState("col-6 col-md-4 col-lg-2 mt-3 mb-3");
    const staffList = props.staffs
        .map((staff) => {
            return (
                <div
                    key={staff.id}
                    className={column}
                >
                    <RenderStaffList staff={staff} />
                </div>
            )
        })
    return (
        <div className="container">
            <h4 className="mt-2">Nhân Viên</h4>
            <div className="btn-group col-12">
                <select
                    className="custom-select btn-btn-primary text-black"
                    onChange={e => setColumn(e.target.value)}
                >
                    <option>Chọn số cột</option>
                    {cols.map((col) => (
                        <option
                            key={col.classColumn}
                            value={col.classColumn}
                        >
                            {col.name}
                        </option>
                    ))}

                </select>
            </div>
            <div className="row mt-5 mb-5" >
                {staffList}
            </div>
        </div>
    )
}

export default StaffList;