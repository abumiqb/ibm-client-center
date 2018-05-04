import React, { Component } from 'react';
import { Row, Col, Container,  Button, Footer, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigering from './Navigering';
import './index.css';
import logo from './Bilder/logo.png';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Router>
                <div className="flyout">
                    <Navbar color="black" dark expand="md" fixed="top" scrolling>
                        <NavbarBrand href="/">
                            <img src={logo} alt="" height="50" />
                        </NavbarBrand>
                        { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                        <Collapse isOpen = { this.state.collapse } navbar>
                            <NavbarNav className="ml-auto">
                                <NavItem active>
                                    <NavLink to="/">HOME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/rooms">ROOMS</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/book-room">BOOK ROOM</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/book-briefing">BRIEFING</NavLink>
                                </NavItem>
                            </NavbarNav>
                            <NavbarNav right>
                                <NavItem>
                                    <form className="form-inline md-form mt-0">
                                        <Button size="sm" color="primary">Admin</Button>
                                    </form>
                                </NavItem>
                            </NavbarNav>
                        </Collapse>
                    </Navbar>
                    <main style={{marginTop: '4rem'}}>
                        <Navigering />
                    </main>
                    <Footer color="" className="font-small lighten-3 pt-4 mt-4">
                        <Container className="text-center text-md-left">
                            <Row className="my-4">
                                <Col md="4" lg="4">
                                    <h5 className="text-uppercase mb-4 font-weight-bold">International Business Machines</h5>
                                    <p>IBM Client Center Booking</p>
                                </Col>
                                <hr className="clearfix w-100 d-md-none"/>
                                <Col md="2" lg="2" className="ml-auto">
                                    <h5 className="text-uppercase mb-4 font-weight-bold">Menu</h5>
                                    <ul className="list-unstyled">
                                        <p><a href="/">HOME</a></p>
                                        <p><a href="/rooms">ROOMS</a></p>
                                        <p><a href="/book-room">BOOK ROOM</a></p>
                                        <p><a href="/book-briefing">BRIEFING</a></p>
                                    </ul>
                                </Col>
                                <hr className="clearfix w-100 d-md-none"/>
                                <Col md="5" lg="4">
                                    <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
                                    <p><i className="fa fa-home mr-3"></i>Lakkegata 53, 0187 Oslo</p>
                                    <p><i className="fa fa-envelope mr-3"></i>ibminfo@no.ibm.com</p>
                                    <p><i className="fa fa-phone mr-3"></i>+47-6699-8000</p>
                                    <p><i className="fa fa-print mr-3"></i>+47-6699-8001</p>
                                </Col>
                                <hr className="clearfix w-100 d-md-none"/>
                                <Col md="2" lg="2" className="text-center">
                                    <div className="mb-5 flex-center">
                                        <a className="fb-ic" href="https://www.facebook.com/ibmnordic/"><i className="fa fa-facebook fa-lg white-text mr-md-4" > </i></a>
                                        <a className="tw-ic" href="https://twitter.com/ibmnorge"><i className="fa fa-twitter fa-lg white-text mr-md-4"> </i></a>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <div className="footer-copyright text-center">
                            <Container fluid>
                                &copy; {(new Date().getFullYear())} Copyright: <a href="#!">IBM Client Center</a>
                            </Container>
                        </div>
                    </Footer>
                </div>
            </Router>
        );
    }
}

export default App;

