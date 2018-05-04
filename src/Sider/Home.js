import React from 'react';
import { EdgeHeader, FreeBird, Col, Row, CardBody } from 'mdbreact';
import { ToastContainer } from 'react-toastify';
import moterom from '../Bilder/moterom.png';
import briefing from '../Bilder/briefing.png';
import person from '../Bilder/person.png';
const NavLink = require('react-router-dom').NavLink;

class Hjem extends React.Component {

    render(){
        return(
            <div>
                <EdgeHeader color="" />
                <FreeBird>
                    <h1 className="h1-responsive"><strong>IBM CLIENT CENTER BOOKING</strong></h1>
                    <br/>
                    <Row>
                        <Col md="12" className="mx-auto float-none white z-depth-1 py-2 px-2">
                            <CardBody>
                                <Row>
                                    <Col md="4" className="text-center home-feature-box">
                                        <NavLink to="/rooms">
                                            <img src={moterom} alt=""  height="150"/>
                                            <br/><br/>
                                            <h4>ROOMS</h4>
                                        </NavLink>
                                    </Col>
                                    <Col md="4" className="text-center home-feature-box">
                                        <NavLink to="/book-briefing">
                                            <img src={briefing} alt=""  height="150"/>
                                            <br/><br/>
                                            <h4>BRIEFING</h4>
                                        </NavLink>
                                    </Col>
                                    <Col md="4" className="text-center home-feature-box">
                                        <NavLink to="/book-room">
                                            <img src={moterom} alt="" href="/bookrom"  height="150"/>
                                            <br/><br/>
                                            <h4>BOOK ROOM</h4>
                                        </NavLink>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Col>
                    </Row>
                    <br/><br/>
                    <h2 className="h2-responsive"><strong></strong></h2>
                    <br/>
                    <div className="row">
                        <div className="col-sm-4">
                            <img src={person} alt=""  height="140"/>
                            <br/><br/>
                            <h5>Ida F. Breivik</h5>
                            <h6>Client Center Manager</h6>
                            <a href = "mailto:ida.f.breivik@no.ibm.com">ida.f.breivik@no.ibm.com</a>
                            <h6>+47 40523618</h6>
                        </div>
                        <div className="col-sm-4">
                            <img src={person} alt=""  height="140"/>
                            <br/><br/>
                            <h5>Cecilie Thoresen</h5>
                            <h6>Client Center Assistant</h6>
                            <a href = "mailto:cecilie.thoresen@ibm.com">cecilie.thoresen@ibm.com</a>
                            <h6>+47 93264630</h6>
                        </div>
                        <div className="col-sm-4">
                            <img src={person} alt=""  height="140"/>
                            <br/><br/>
                            <h5>Cedrik Kløvstad</h5>
                            <h6>Client Center Assistant</h6>
                            <a href = "mailto:cedrik.klovstad@ibm.com">cedrik.klovstad@ibm.com</a>
                            <h6>+47 93482987</h6>
                        </div>
                    </div>
                </FreeBird>
                <ToastContainer 
                hideProgressBar={true}
                newestOnTop={true}
                autoClose={5000}
                />
            </div>
        );
    }


}

export default Hjem;