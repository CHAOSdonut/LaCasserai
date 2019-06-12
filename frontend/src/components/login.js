import React, {Component} from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormFeedback
} from 'reactstrap';
import '../styles/login.css';
import { loginUser } from '../actions/userActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alertmsg from './alert';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            validate: {
                emailState: '',
            },
        };
        this.handleChange = this.handleChange.bind(this);
    }

    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state;
        if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
        } else {
            validate.emailState = 'has-danger'
        }
        this.setState({ validate })
    }

    handleChange = async (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        await this.setState({
            [ name ]: value,
        });
    };

    submitForm(e) {
        e.preventDefault();
        this.props.loginUser(this.state.email, this.state.password, this.props.user.token);
    }

    render() {
        const { email, password } = this.state;
        return (
            <Container className="login">
                { this.props.error.login.error && <Alertmsg errorCode={this.props.error.login.errorCode} errorMsg={this.props.error.login.errorMsg} dismissSource="login"/> }
                <h2>Sign In</h2>
                <Form className="loginForm" onSubmit={ (e) => this.submitForm(e) }>
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                                autoComplete="mail"
                                value={ email }
                                valid={ this.state.validate.emailState === 'has-success' }
                                invalid={ this.state.validate.emailState === 'has-danger' }
                                onChange={ (e) => {
                                    this.validateEmail(e)
                                    this.handleChange(e)
                                } }
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
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                                autoComplete="current-password"
                                value={ password }
                                onChange={ (e) => this.handleChange(e) }
                            />
                        </FormGroup>
                    </Col>
                    <Button>Submit</Button>
                </Form>
            </Container>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user,
    error: state.error
});

export default connect(mapStateToProps, { loginUser })(Login);