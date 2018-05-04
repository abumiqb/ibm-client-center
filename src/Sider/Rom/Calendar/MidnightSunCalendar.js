import React from 'react'
import { Container, Row, Jumbotron } from 'mdbreact';
import BigCalendar from 'react-big-calendar-like-google';
import 'react-big-calendar-like-google/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/en-ie';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Tilgjenglighet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bookings: []
        };
    }
    componentDidMount() {
        fetch('https://ibm-client-center-api.mybluemix.net/booking')
            .then(res => res.json())
            .then(
                (result) => {
                    let arr = [];
                    for(let i = 0; i < result.length; i++)
                    {
                        let cal = {};
                        let cal1 = {};
                        cal["title"] = ["Reserved"];
                        cal["startDate"] = moment(result[i]["dato"] + " " + result[i]["starttid"], "DD-MM-YYYY HH:mm").toDate();
                        cal["endDate"] = moment(result[i]["dato"] + " " + result[i]["slutttid"], "DD-MM-YYYY HH:mm").toDate();
                        cal["room"] = result[i]["room"];

                        if( result[i]["approved"] === true && result[i]["room"] === "Midnight Sun")
                        {
                            arr.push(cal);
                        }
                        else
                            arr.push(cal1);
                    }

                    this.setState({
                        isLoaded: false,
                        bookings: arr
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

        window.addEventListener("resize", () =>
        {

        });
    }
    render() {
        return (
            <Container>
                <br/>
                <Row>
                    <div className="container-fluid text-center">
                        <Jumbotron>


                            <BigCalendar
                                selectable
                                style={{ height: 700, width: this.state.width }}
                                events={this.state.bookings}
                                startAccessor='startDate'
                                endAccessor='endDate'
                                defaultView='week'
                                onSelectEvent={event => alert(`Booking Details: \n\nStart: ${event.startDate} ` +
                                    `\nEnd: ${event.endDate}` +
                                    `\nRom: ${event.room}`
                                )
                                }
                            />
                        </Jumbotron>
                    </div>
                </Row>
            </Container>

        );
    }
}

export default Tilgjenglighet;





