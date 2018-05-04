import React from 'react';
import { EdgeHeader, FreeBird, Col, Row, CardBody, CardTitle, CardImage, Button, Card } from 'mdbreact';
import './Hjem.css';
import NorthernLight from '../Bilder/Rom/NorthernLight/1.jpg';
import GreenGlow from '../Bilder/Rom/GreenGlow/1.jpg';
import BlueHour from '../Bilder/Rom/BlueHour/1.jpg';
import Equinox from '../Bilder/Rom/Equinox/1.jpg';
import SuperMoon from '../Bilder/Rom/SuperMoon/1.jpg';
import MidnightSun from '../Bilder/Rom/MidnightSun/1.jpeg'

class Mote extends React.Component {

    render(){
        return(
            <div>
                <EdgeHeader color="" />
                <FreeBird>
                    <h1 className="h1-responsive"><strong>ROOMS</strong></h1>
                    <br/>
                    <Row>
                        <Col md="12" className="mx-auto float-none white z-depth-1 py-1 px-1">
                            <CardBody>
                                <Row>
                                    <Col md="col-sm-4" className="text-center">
                                        <Card>
                                            <CardImage className="img-fluid" src={NorthernLight} href={"/room/northern-light"}/>
                                       
                                            <CardBody>
                                                <CardTitle>Northern Light</CardTitle>
                                                <Button block color="primary" href="/room/northern-light">INFO</Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col md="col-sm-4" className="text-center">
                                        <Card>
                                            <CardImage className="img-fluid" src={GreenGlow} />
                                            <CardBody>
                                                <CardTitle>Green Glow</CardTitle>
                                                <Button block color="primary" href="/room/green-glow">INFO</Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col md="col-sm-4" className="text-center">
                                        <Card>
                                            <CardImage className="img-fluid" src={BlueHour} />
                                            <CardBody>
                                                <CardTitle>Blue Hour</CardTitle>
                                                <Button block color="primary" href="/room/blue-hour">INFO</Button>
                                            </CardBody>
                                        </Card>
                                    </Col>

                                </Row>
                            </CardBody>
                        </Col>
                        <Col md="12" className="mx-auto float-none white z-depth-1 py-1 px-1">
                            <CardBody>
                                <Row>
                                    <Col md="col-sm-4" className="text-center">
                                        <Card>
                                            <CardImage className="img-fluid" src={Equinox} />
                                            <CardBody>
                                                <CardTitle>Equinox</CardTitle>
                                                <Button block color="primary" href="/room/equinox">INFO</Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col md="col-sm-4" className="text-center">
                                        <Card>
                                            <CardImage className="img-fluid" src={SuperMoon} />
                                            <CardBody>
                                                <CardTitle>Super Moon</CardTitle>
                                                <Button block color="primary" href="/room/super-moon">INFO</Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col md="col-sm-4" className="text-center">
                                        <Card>
                                            <CardImage className="img-fluid" src={MidnightSun} />
                                            <CardBody>
                                                <CardTitle>Midnight Sun</CardTitle>
                                                <Button block color="primary" href="/room/midnight-sun">INFO</Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Col>
                    </Row>
                    <br/><br/>

                </FreeBird>
            </div>
        );
    }
}

export default Mote;