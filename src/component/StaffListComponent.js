import React, {Component} from "react";
import dateFormat from "dateformat";


const StaffListCard = ({staffData, onClick, column}) => (
    <div className={column}>
        <div className="card mt-3 border-warning">
            <div 
                className="card-body staff-list "
                onClick={onClick}
            >
                {staffData.name}
            </div>
        </div>
    </div>
)
// Khởi tạo biến columnArray để lưu giá trị column sẽ được thay đổi
const columnArray = [
    {
        id: 1,
        name: "Một Cột",
        class: "col-12"
    },
    {
        id: 2,
        name: "Hai Cột",
        class: "col-6 col-md-6 col-lg-6"
    },
    {
        id: 3,
        name: "Ba Cột",
        class: "col-4 col-md-4 col-lg-4"
    },
    {
        id: 4,
        name: "Bốn Cột",
        class: "col-4 col-md-3 col-lg-3"
    },
    {
        id: 5,
        name: "Sáu Cột",
        class: "col-4 col-md-2 col-lg-2"
    }
]
// Tạo ChangeColumn component nhận 2 props là columnData và onClick
const ChangeColumn = ({columnData, onClick }) => (
    <div className="d-grid gap-2 d-md-block m-1 mx-auto col-md-2 col-lg-2">
        <button
            onClick = {() => onClick(columnData.class)}
            className="btn mt-3 btn-warning btn-block"
        >{columnData.name}</button>

    </div>
)
    
class StaffList extends Component {
    // Đặt state columnSelected staffDetail và có giá trị mặc định
    // Chúng sẽ được thay đổi với phương thức setState()
    constructor(props) {
        super(props);
        this.state = {
            columnSelected: "col-12 col-md-6 col-lg-4",
            staffDetail: null
        }
    }
    // Khi click vào card tên nhân viên sẽ gọi đến hàm staffDetailHandler
    // để thiết lập lại state từ null thành dữ liệu thông tin tương ứng
    staffDetailHandle(staff) {
        this.setState({   
            staffDetail: staff
        })
    }
    // Sau khi hàm staffDetailHandler thì staffDetailRender sẽ được gọi
    // để thực thi render ra thông tin chi tiết của nhân viên
    // Nếu props truyền về là null thì sẽ trả lại thẻ div rỗng
    staffDetailRender(staff) {
        if(staff != null) {
            return (
                
                    <div className="card mt-3 col-12">
                        <div className="row g-0">
                            <div className="col-12 col-md-4 mt-2 mb-2 d-flex justify-content-center">
                                <img 
                                    src={staff.image}
                                    alt={staff.name}
                                    className="img-fluid "
                                />
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="card-body text-center mb-3">
                                    <div className="card-title font-weight-bold">
                                        Họ và Tên : {staff.name}
                                    </div>
                            
                                    <p className="card-text">
                                        <span className="fw-bolder">Ngày sinh: </span> 
                                        {dateFormat(staff.doB,"dd/mm/yyyy")}
                                    </p>
                                    <p className="card-text">
                                        <span className="fw-bolder">Ngày vào công ty : </span> 
                                        {dateFormat(staff.startDate,"dd/mm/yyyy")}
                                    </p>
                                    <p className="card-text">
                                        <span className="fw-bolder">Bộ Phận : </span> 
                                        {staff.department.name}
                                    </p>
                                    <p className="card-text">
                                        <span className="fw-bolder">Ngày nghỉ còn lại : </span> 
                                        {staff.annualLeave}
                                    </p>
                                    <p className="card-text">
                                        <span className="fw-bolder">Số ngày làm thêm : </span> 
                                        {staff.overTime}
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
               
               
            )
        } else {
            return(
                <div></div>
            )
        }
    }
    
    render() {
        // Hàm changeColumnHandler nhận props là col và thực hiện set lại 
        // state columnSelected sang props col tương ứng
        const changeColumnHandle = (col) => (
            this.setState ({
                columnSelected: col
            })
        )
        return (
            <div className="container">
                <div className="row">
                    {
                        columnArray.map(column => (
                            <ChangeColumn
                                key= {column.id}
                                columnData = {column}
                                onClick = {changeColumnHandle}
                            />
                        ))
                    }
                </div>
                {/**Sử dụng this.props.staffs vì props được nhận từ App component */}
                <div className="row ">
                    {
                        this.props.staffs.map(staff => (
                            <StaffListCard
                                key = {staff.id}
                                staffData = {staff}
                                column = {this.state.columnSelected}
                                onClick = {() => this.staffDetailHandle(staff)}
                            />
                        ))
                    }
                </div>
                {/**Sử dụng this.state.staffDetail vì đây là state của chính nó */}
                <div className="row p-2">
                    {this.staffDetailRender(this.state.staffDetail)}
                </div>
                <p className="text-danger fw-bold text-center mt-3">
                    Bấm để xem thêm thông tin.
                </p>
            </div>
        )
    }
}

export default StaffList;