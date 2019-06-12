import React, {Component} from 'react';
import { NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from "react-router-dom";
import {  } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Container,
    NavbarBrand
} from 'reactstrap';
import '../styles/navbar.css';

class AppNavbar extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand to="/"><span className="navTitle">La Casserai</span></NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink to="/" activeClassName="active" tag={RRNavLink}>HOME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/rooms" activeClassName="active" tag={RRNavLink}>ROOMS</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/register" activeClassName="active" tag={RRNavLink}>REGISTER</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/login" activeClassName="active" tag={RRNavLink}>LOGIN</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/admin" activeClassName="active" tag={RRNavLink}>ADMIN</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }

}

export default AppNavbar;