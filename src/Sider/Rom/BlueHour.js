import React from 'react';
import { EdgeHeader, FreeBird, Col, Row, Button } from 'mdbreact';
import Carousel from 'nuka-carousel';
import BH1 from '../../Bilder/Rom/BlueHour/1.jpg'
import BH2 from '../../Bilder/Rom/BlueHour/2.jpeg'
import './Tekst.css';

class NorthernLight extends React.Component {
    render(){
        return(
            <div>
                <EdgeHeader color="" />
                <FreeBird>
                    <h1 className="h1-responsive"><strong>Blue Hour</strong></h1>
                    <br/>
                    <Row>
                        <Col md="9" className="float-none white z-depth-1 py-1 px-1">

                            <Carousel>
                                <img src={BH1} alt=""/>
                                <img src={BH2} alt=""/>
                            </Carousel>
                        </Col>
                        <Col md="3" className="float-none">
                            <br/><br/><br/><br/><br/>
                            <h2>Info</h2>
                            <h4>Seating capacity: 8</h4>
                            <h4>Cisco Spark Board</h4>
                            <h4>White Boards</h4>
                            <br/>
                            <Button block color="primary" href="/room/blue-hour/booking">Book room</Button>
                            <br/>
                            <Button block color="primary" href="/room/blue-hour/calendar">Check availability</Button>
                        </Col>
                    </Row>
                </FreeBird>
            </div>
        );
    }
}

export default NorthernLight;
