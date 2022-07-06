import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Loading } from "./LoadingComponent";

// tạo Express function để render name và number of staffs trong Department
function RenderDepartmentItem({ department }) {
  return (
    <Card className="border-success shadow">
      <Link to={`/departments/${department.id}`}>
        <CardBody>
          <CardTitle>{department.name}</CardTitle>
          <CardText>Số lượng nhân viên: {department.numberOfStaff}</CardText>
        </CardBody>
      </Link>
    </Card>
  );
}

class DepartmentList extends Component {
  //Khi component đã mounted, gọi fetchDepartment()
  componentDidMount() {
    this.props.fetchDepartments();
  }

  render() {
    const departmentList = this.props.departmentsLoading ? (
      <Loading />
    ) : this.props.departmentsErrMess ? (
      <h4>{this.props.departmentsErrMess}</h4>
    ) : (
      this.props.departments.map((department) => {
        return (
          <div key={department.id} className="col-12 col-md-6 col-lg-4 my-1">
            <RenderDepartmentItem department={department} />
          </div>
        );
      })
    );

    return (
      <div className="container">
        <div className="row mt-1">
          <div className="col-12">
            <h3>Phòng Ban</h3>
            <hr />
          </div>
        </div>
        <div className="row mb-3">{departmentList}</div>
      </div>
    );
  }
}

export default DepartmentList;
