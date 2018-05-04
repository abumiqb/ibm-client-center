import React from 'react';
import { Container, Row, Col, Jumbotron, Input, Button } from 'mdbreact';
import { ToastContainer, toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';
import '../../../Sider/BookRoom.css'
import { FormErrors } from '../../../Sider/FormErrors';

class BookRoomNorthernLight extends React.Component {
    constructor (props) {
        super(props)
        this.state = {startDate: moment() };
        this.handleChange = this.handleChange.bind(this);
        this.handleFirma = this.handleFirma.bind(this);

        this.state = {
            roms: [],
            showOpportunity: false,
            navn: '',
            firma: '',
            email: '',
            phone: '',
            antall: '',
            dato: '',
            room: '',
            starttid: '',
            slutttid: '',
            formErrors: {email: '', navn: '', firma: '', phone: '', antall: '', dato: ''},
            emailValid: false,
            navnValid: false,
            firmaValid: false,
            phoneValid: false,
            antallValid: false,
            formValid: false
        };
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let firmaValid = this.state.firmaValid;
        let phoneValid = this.state.phoneValid;
        let navnValid = this.state.navnValid;
        let emailValid = this.state.emailValid;
        let antallValid = this.state.antallValid;

        switch(fieldName)
        {
            case 'navn':
                navnValid = value.length >= 1;
                fieldValidationErrors.navn = navnValid ? '': 'is invalid';
                break;
            case 'firma':
                firmaValid = value.length >= 1;
                fieldValidationErrors.firma = firmaValid ? '': 'is invalid';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'phone':
                phoneValid = value.match(/^[0-9\b]+$/);
                fieldValidationErrors.phone = phoneValid ? '': 'is invalid';
                break;
            case 'antall':
                antallValid = value.match(/^[0-9\b]+$/);
                fieldValidationErrors.antall = antallValid ? '': 'is invalid';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors, navnValid: navnValid, firmaValid: firmaValid,
            emailValid: emailValid, phoneValid: phoneValid, antallValid: antallValid}, this.validateForm);
    }

    validateForm()
    {
        this.setState({formValid: this.state.emailValid && this.state.navnValid &&
            this.state.firmaValid && this.state.phoneValid && this.state.antallValid});
    }

    errorClass(error)
    {
        return(error.length === 0 ? '' : 'has-error');
    }


    handleChange(date) {
        this.setState({startDate: date});
    }

    componentDidMount() {
        fetch('https://ibm-client-center-api.mybluemix.net/rom')
            .then(res => res.json())
            .then(
                (result) => {
                    let drop = [];

                    for(let i = 0; i < result.length; i++) {
                        let skjema = {};
                        skjema["navn"] = result[i]["navn"];
                        drop.push(skjema);
                    }

                    this.setState({
                        isLoaded: true,
                        roms: drop,
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    handleSubmit(event) {
        event.preventDefault();
        var data = {};

        if(this.state.showOpportunity){
            data = {
                navn: event.target.elements.navn.value,
                firma: event.target.elements.firma.value.toUpperCase(),
                email: event.target.elements.email.value,
                phone: event.target.elements.phone.value,
                antall: event.target.elements.antall.value,
                dato: event.target.elements.dato.value,
                starttid: event.target.elements.starttid.value,
                slutttid: event.target.elements.slutttid.value,
                opportunityNr: event.target.elements.opportunityNr.value,
                room: "Northern Light",
                approved: false

            }
        }
        else{
            data = {
                navn: event.target.elements.navn.value,
                firma: event.target.elements.firma.value.toUpperCase(),
                email: event.target.elements.email.value,
                phone: event.target.elements.phone.value,
                antall: event.target.elements.antall.value,
                dato: event.target.elements.dato.value,
                starttid: event.target.elements.starttid.value,
                slutttid: event.target.elements.slutttid.value,
                room: "Northern Light",
                approved: false
            }
        }
        fetch('https://ibm-client-center-api.mybluemix.net/booking', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((response) => {
            this.props.history.push('');

            toast.success('Booked successfully',
                {
                    position: toast.POSITION.TOP_CENTER
                });
        })
    }

    handleFirma(event)
    {
        'IBM'.toUpperCase() === event.target.value.toUpperCase() ? this.setState({showOpportunity: true}) : this.setState({showOpportunity: false});
    }

    render ()
    {
        const opporNr = <Input label="Opportunity Number" icon="address-card" id="opportunityNr" name="opportunityNr" ref="opportunityNr" type="text" />;
        return( <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <Container>
                        <br/>
                        <Row>
                            <Col md="8" className="mt-3 mx-auto">
                                <Jumbotron>
                                    <h2>BOOK GREEN GLOW</h2>
                                    <FormErrors formErrors={this.state.formErrors} />
                                    <div className={`form-group ${this.errorClass(this.state.formErrors.navn)}`}>
                                        <Input label="Name" icon="user" id="navn" name="navn" required className="form-control" ref="navn" type="text"
                                               value={this.state.navn}
                                               onChange={this.handleUserInput}/>
                                    </div>
                                    <div className={`form-group ${this.errorClass(this.state.formErrors.firma)}`}>
                                        <Input label="Firm" icon="building" id="firma" name="firma" required className="form-control" ref="firma" type="text"
                                               value={this.state.firma}
                                               onChange = { (e) => { this.handleFirma(e); this.handleUserInput(e) } }
                                        />
                                    </div>
                                    <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                                        <Input label="Email" icon="envelope" id="email" name="email" required className="form-control" ref="email" type="text"
                                               value={this.state.email}
                                               onChange={this.handleUserInput}
                                        />
                                    </div>
                                    <div className={`form-group ${this.errorClass(this.state.formErrors.phone)}`}>
                                        <Input label="Phone" icon="phone" id="phone" name="phone" required className="form-control" ref="phone" type="text"
                                               value={this.state.phone}
                                               onChange={this.handleUserInput}
                                        />
                                    </div>
                                    <div className={`form-group ${this.errorClass(this.state.formErrors.antall)}`}>
                                        <Input label="Number of people" icon="users" id="antall" name="antall" required className="form-control" ref="firma" type="text"
                                               value={this.state.antall}
                                               onChange={this.handleUserInput}
                                        />
                                    </div>
                                    {this.state.showOpportunity === true ? opporNr : null}
                                    <br/><br/>
                                    <select name="room" id="room" type="text">
                                        <option value="Blue Hour" disabled selected >Northern Light</option>
                                    </select><br/>
                                    <br/><br/>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <i class="fa fa-calendar fa-lg"></i>  <label>Date</label>
                                            <br/>
                                            <DatePicker selected={this.state.startDate} id="dato" name="dato" ref="dato" onChange={this.handleChange}/>

                                        </div>
                                        <div class="col-sm-4">
                                            <i class="fa fa-clock-o fa-lg"></i> <label>Start Time</label>
                                            <br/>
                                            <TimePicker defaultValue={moment()} showSecond={false} minuteStep={30} id="starttid" name="starttid" ref="starttid" />
                                        </div>
                                        <div class="col-sm-4">
                                            <i class="fa fa-clock-o fa-lg"></i>  <label>End Time</label>
                                            <br/>
                                            <TimePicker defaultValue={moment()} showSecond={false} minuteStep={30} id="slutttid" name="slutttid" ref="slutttid"/>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <Button type="submit" block color="primary" disabled={!this.state.formValid}>Book</Button>
                                </Jumbotron>
                            </Col>
                        </Row>
                    </Container>
                </form>
                <ToastContainer
                    hideProgressBar={true}
                    newestOnTop={true}
                    autoClose={5000}
                />
            </div>
        );
    }
}

export default BookRoomNorthernLight;