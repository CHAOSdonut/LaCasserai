import React, {Component} from 'react';
import { FormGroup, Label, Input, Button, Form } from 'reactstrap'
import '../styles/bookRoom.css';
import { connect } from 'react-redux';
import { createReservation } from "../actions/reservationActions";
import PropTypes from 'prop-types';
import history from '../history';

class BookRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomObj: this.props.location.state,
            dateStart: '',
            dateEnd: '',
        };
    }

    sendReservation = () => {
        if(this.props.user.user.id !== "") {
            this.props.createReservation(
                this.props.user.user.id,
                this.state.roomObj.room.room_nr,
                this.state.dateStart,
                this.state.dateEnd
            )
        }
        else {
            history.push('/login');
        }
    };

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

        if(this.props.user.user.id !== "" && this.state.dateStart !== "" && this.state.dateEnd !== ""){
            this.sendReservation()
        }
    }

    render() {
        return (
            <div className="bookroom">
                <p><h2>Boek kamer {this.state.room_nr}</h2></p>
                <p>
                    <Form onSubmit={(e) => this.submitForm(e)}>
                    <FormGroup className="dateInput">
                        <Label for="dateStart">From:</Label>
                        <Input
                            type="date"
                            name="dateStart"
                            id="dateStart"
                            value={ this.state.dateStart }
                            placeholder="date placeholder"
                            onChange={ (e) => {
                                this.handleChange(e)
                            } }
                        />
                        <Label for="dateEnd">Till:</Label>
                        <Input
                            type="date"
                            name="dateEnd"
                            id="dateEnd"
                            value={ this.state.dateEnd }
                            placeholder="date placeholder"
                            onChange={ (e) => {
                                this.handleChange(e)
                            } }
                        />
                        <br/>
                        <Button color="primary">Boeken</Button>
                    </FormGroup>
                    </Form>
                </p>
            </div>
        )
    }

}

BookRoom.propTypes = {
    createReservation: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    room: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, { createReservation })(BookRoom);