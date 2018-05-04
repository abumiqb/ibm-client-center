import React from 'react';
import { Container, Row, Col, Jumbotron, Input, Button } from 'mdbreact';
import { ToastContainer, toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';
import './BookRoom.css'
import { FormErrors } from './FormErrors';

class BookBriefing extends React.Component {
    constructor (props) {
        super(props)
        this.state = {startDate: moment() };
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            roms: [],
            showOpportunity: false,
            navn: '',
            firma: '',
            email: '',
            phone: '',
            antall: '',
            dato: '',
            starttid: '',
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
            this.state.firmaValid && this.state.phoneValid && this.state.antallValid });

    }

    errorClass(error)
    {
        return(error.length === 0 ? '' : 'has-error');
    }


    handleChange(date) {
        this.setState({startDate: date});
    }

    handleSubmit(event) {
        event.preventDefault();
        var data = {};

        data = {
            navn: event.target.elements.navn.value,
            firma: event.target.elements.firma.value.toUpperCase(),
            email: event.target.elements.email.value,
            phone: event.target.elements.phone.value,
            antall: event.target.elements.antall.value,
            dato: event.target.elements.dato.value,
            starttid: event.target.elements.starttid.value,
            briefing: event.target.elements.briefing.value,
            approved: false
        }


        fetch('http://localhost:3001/briefing', {
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

    render ()
    {
        return( <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <Container>
                        <br/>
                        <Row>
                            <Col md="8" className="mt-3 mx-auto">
                                <Jumbotron>
                                    <h2>BOOK BRIEFING</h2>
                                    <FormErrors formErrors={this.state.formErrors} />
                                    <div className={`form-group ${this.errorClass(this.state.formErrors.navn)}`}>
                                        <Input label="Name" icon="user" id="navn" name="navn" required className="form-control" ref="navn" type="text"
                                               value={this.state.navn}
                                               onChange={this.handleUserInput}/>
                                    </div>
                                    <div className={`form-group ${this.errorClass(this.state.formErrors.firma)}`}>
                                        <Input label="Firm" icon="building" id="firma" name="firma" required className="form-control" ref="firma" type="text"
                                               value={this.state.firma}
                                               onChange={this.handleUserInput}/>
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
                                    <br/><br/>
                                    <label for="exampleFormControlTextarea3">Briefing description</label>
                                    <textarea class="form-control" id="briefing" name="briefing" rows="7"></textarea>
                                    <br/><br/>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <i class="fa fa-calendar fa-lg"></i>  <label>Date</label>
                                            <br/>
                                            <DatePicker selected={this.state.startDate} id="dato" name="dato" ref="dato" onChange={this.handleChange}/>

                                        </div>
                                        <div class="col-sm-4">
                                            <i class="fa fa-clock-o fa-lg"></i> <label>Time</label>
                                            <br/>
                                            <TimePicker defaultValue={moment()} showSecond={false} minuteStep={30} id="starttid" name="starttid" ref="starttid" />
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

export default BookBriefing;