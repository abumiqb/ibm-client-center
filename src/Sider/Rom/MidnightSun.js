import React from 'react';
import { EdgeHeader, FreeBird, Col, Row, Button } from 'mdbreact';
import Carousel from 'nuka-carousel';
import MD1 from '../../Bilder/Rom/MidnightSun/1.jpeg';
import MD2 from '../../Bilder/Rom/MidnightSun/2.jpeg';
import './Tekst.css';

class NorthernLight extends React.Component {
    render(){
        return(
            <div>
                <EdgeHeader color="" />
                <FreeBird>
                    <h1 className="h1-responsive"><strong>Midnight Sun</strong></h1>
                    <br/>
                    <Row>
                        <Col md="9" className="float-none white z-depth-1 py-1 px-1">

                            <Carousel>
                                <img src={MD1} alt=""/>
                                <img src={MD2} alt=""/>
                            </Carousel>
                        </Col>
                        <Col md="3" className="float-none">
                            <br/><br/><br/><br/><br/>
                            <h2>Info</h2>
                            <h4>Seating capacity: </h4>
                            <br/>
                            <Button block color="primary" href="/room/midnight-sun/booking">Book room</Button>
                            <br/>
                            <Button block color="primary" href="/room/midnight-sun/calendar">Check availability</Button>
                        </Col>
                    </Row>
                </FreeBird>
            </div>
        );
    }
}

export default NorthernLight;
