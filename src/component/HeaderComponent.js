import React, { Component } from "react";
import { Nav, NavItem, Navbar, NavbarToggler, Collapse, NavbarBrand } from 'reactstrap';
class Header extends Component {
    constructor(props) {
        super(props);
        // NavbarToggler mặc định luôn là đóng
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }
    // set lại state nếu mở thì click vào thành đóng và ngược lại
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar
                    color="secondary"
                    container="md"
                    expand="md"
                    light
                >
                    <NavbarBrand>
                        <img
                            color="white"
                            src="./assets/image/logo.png"
                            alt="Ristorante Con Fusion"
                            width="40"
                            height="30"
                        />
                    </NavbarBrand>
                    <NavbarToggler
                        // Khi click gọi hàm tooggleNav
                        onClick={this.toggleNav}
                    />
                    <Collapse
                        navbar
                        isOpen={this.state.isNavOpen}
                    >
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                                <i className="fa fa-users fa-lg me-1"></i>
                                Nhân Viên
                            </NavItem>
                            <NavItem>
                                <i className="fa fa-id-card-o fa-lg me-1"></i>
                                Phòng Ban
                            </NavItem>
                            <NavItem>
                                <i className="fa fa-money fa-lg me-1"></i>
                                Bảng Lương
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;