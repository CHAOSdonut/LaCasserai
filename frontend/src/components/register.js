import React, {Component} from 'react';
import '../styles/register.css';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormFeedback
} from 'reactstrap';
import {registerUser} from '../actions/userActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Alertmsg from './alert';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'first_name': '',
            'last_name': '',
            'email': '',
            'password': '',
            validate: {
                emailState: '',
            },
        };
        this.handleChange = this.handleChange.bind(this);
    }

    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const {validate} = this.state;
        if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
        } else {
            validate.emailState = 'has-danger'
        }
        this.setState({validate})
    }

    handleChange = async (event) => {
        const {target} = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const {name} = target;
        await this.setState({
            [ name ]: value,
        });
    };

    submitForm(e) {
        e.preventDefault();
        this.props.registerUser(this.state.first_name, this.state.last_name, this.state.email, this.state.password);
    }

    render() {
        const {first_name, last_name, email, password} = this.state;
        return (
            <Container className="fullDiv">
                { this.props.error.register.error && <Alertmsg errorCode={this.props.error.register.errorCode} errorMsg={this.props.error.register.errorMsg} dismissSource="register"/> }
                <div className="register">
                    <Container className="registerForm">
                        <h2>Registreer</h2>
                        <Form className="form" onSubmit={(e) => this.submitForm(e)}>
                            <Col>
                                <FormGroup>
                                    <Label>Voornaam:</Label>
                                    <Input
                                        type="first_name"
                                        name="first_name"
                                        id="first_name"
                                        placeholder="Voornaam"
                                        value={first_name}
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Achternaam:</Label>
                                    <Input
                                        type="last_name"
                                        name="last_name"
                                        id="last_name"
                                        placeholder="Achternaam"
                                        value={last_name}
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Email:</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        placeholder="myemail@email.com"
                                        autoComplete="'new-mail"
                                        value={email}
                                        valid={this.state.validate.emailState === 'has-success'}
                                        invalid={this.state.validate.emailState === 'has-danger'}
                                        onChange={(e) => {
                                            this.validateEmail(e)
                                            this.handleChange(e)
                                        }}
                                    />
                                    <FormFeedback valid>
                                        Uw Email is correct.
                                    </FormFeedback>
                                    <FormFeedback>
                                        Gebruik een correct mail adress.
                                    </FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="examplePassword">Wachtwoord:</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="examplePassword"
                                        placeholder="********"
                                        autoComplete="new-password"
                                        value={password}
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                </FormGroup>
                            </Col>
                            <Button>Submit</Button>
                        </Form>
                    </Container>
                </div>
            </Container>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user,
    error: state.error
});

export default connect(mapStateToProps, {registerUser})(Register);