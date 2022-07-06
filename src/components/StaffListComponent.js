import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Col,
} from "reactstrap";
import { Loading } from './LoadingComponent';
import { Link } from "react-router-dom";
import { FadeTransform } from 'react-animation-components';

export const RenderStaffItem = ({ staff }) => {
    return (
        <FadeTransform in
            transformProp={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
            <Card>
                <Link to={`/staffs/${staff.id}`}>
                    <CardImg width="100%" src={staff.image} />
                    <CardBody className="py-2 px-1">
                        <CardTitle className="text-dark text-center">
                            {staff.name}
                        </CardTitle>
                    </CardBody>
                </Link>
            </Card>
        </FadeTransform>
    );
};
class StaffList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sortBy: "StaffId"
        };
        this.staffs = JSON.parse(JSON.stringify(this.props.staffs));
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    // //Handle Event of Searching Staff Uncontrolled Form
    handleFormSubmit(event) {
        event.preventDefault();
        let searchName = this.search.value;
        console.log(searchName);
        // ?
        window.location.pathname = `/search/${searchName}`;
    }
    //Handle Event of Sorting Staff List
    setSortBy(sortBy) {
        this.setState({
            sortBy: sortBy
        });
    }
    // create function sortStaffItem
    sortStaffItem(sortBy) {
        const staffs = this.staffs;
        switch (sortBy) {
            default: {
                staffs.sort((staff1, staff2) => staff1.id - staff2.id);
                break;
            }
            case "StaffIdReverse": {
                staffs.sort((staff1, staff2) => staff2.id - staff1.id);
            }
        }
    }

    render() {
        this.staffs = JSON.parse(JSON.stringify(this.props.staffs));
        this.sortStaffItem(this.state.sortBy);

        const staffList = this.props.staffsLoading ? (
            <Loading />
        ) : this.props.staffsErrMess ? (
            <h4>{this.props.staffsErrMess}</h4>
        ) : (this.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-12 col-md-6 col-lg-2 mb-3">
                    <RenderStaffItem staff={staff} />
                </div>
            );
        })
        );
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12 col-md-6 my-1">
                        <div className="row pr-lg-5">
                            <div className="col-auto">
                                <h3>Nhân Viên</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 my-1">
                        <Form onSubmit={this.handleFormSubmit}>
                            <FormGroup row className="">
                                <Col>
                                    <Input
                                        type="text"
                                        id="search"
                                        name="search"
                                        innerRef={(input) => (this.search = input)}
                                    />
                                </Col>
                                <Col>
                                    <Button xs="auto">
                                        <span className="fa fa-search"></span> Search
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
                <hr />
                {/* Sort Form */}
                <div className="row mb-3">
                    <Form inline className="col-12">
                        <FormGroup>
                            <Label className="mr-2"> Sắp Xếp</Label>
                        </FormGroup>
                        <FormGroup>
                            <Input id="sortStaff"
                                type="select"
                                onChange={() => {
                                    let sortBy = document.getElementById("sortStaff").value;
                                    return this.setSortBy(sortBy);
                                }}
                            >
                                <option>Sắp xếp theo...</option>
                                <option value="staffId">Mã Nhân viên A-Z</option>
                                <option value="StaffIdReverse">Mã Nhân viên từ Z-A </option>
                            </Input>
                        </FormGroup>
                    </Form>
                </div>
                {/* render staffList */}
                <div className="row">{staffList}</div>
            </div>
        )
    }
};

export default StaffList;