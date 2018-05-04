import React from 'react';
import { EdgeHeader, FreeBird, Col, Row, Button } from 'mdbreact';
import Carousel from 'nuka-carousel';
import SP1 from '../../Bilder/Rom/SuperMoon/1.jpg'
import './Tekst.css';

class NorthernLight extends React.Component {
    render(){
        return(
            <div>
                <EdgeHeader color="" />
                <FreeBird>
                    <h1 className="h1-responsive"><strong>Super Moon</strong></h1>
                    <br/>
                    <Row>
                        <Col md="9" className="float-none white z-depth-1 py-1 px-1">

                            <Carousel>
                                <img src={SP1} alt=""/>
                                <img src={SP1} alt=""/>
                            </Carousel>
                        </Col>
                        <Col md="3" className="float-none">
                            <br/><br/><br/><br/><br/>
                            <h2>Info</h2>
                            <h4>Seating capacity: 26</h4>
                            <h4>Cisco Spark Board</h4>
                            <h4>White Boards</h4>
                            <h4>Mobile White Board</h4>
                            <br/>
                            <Button block color="primary" href="/room/super-moon/booking">Book room</Button>
                            <br/>
                            <Button block color="primary" href="/room/super-moon/calendar">Check availability</Button>
                        </Col>
                    </Row>
                </FreeBird>
            </div>
        );
    }
}

export default NorthernLight;
