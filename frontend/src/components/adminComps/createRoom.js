import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createRoom } from '../../actions/roomAction';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button
} from 'reactstrap';

class CreateRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            room_nr: '',
            price: '',
            description: '',
            facilities: '',
            picture_name: ''
        };
        this.handleChange = this.handleChange.bind(this);
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
        this.props.createRoom(this.state.room_nr, this.state.price, this.state.description, this.state.facilities, this.state.picture_name);
    }

    render() {
        const { room_nr, price, description, facilities, picture_name } = this.state;
        return (
            <Container className="createRoom">
                <h2>Create Room</h2>
                <Form className="roomForm" onSubmit={ (e) => this.submitForm(e) }>
                    <Col>
                        <FormGroup>
                            <Label>Room_nr</Label>
                            <Input
                                type="number"
                                name="room_nr"
                                id="room_nr"
                                placeholder="room_nr"
                                value={ room_nr }
                                onChange={ (e) => this.handleChange(e) }
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>price</Label>
                            <Input
                                type="number"
                                name="price"
                                id="price"
                                placeholder="price"
                                value={ price }
                                onChange={ (e) => this.handleChange(e) }
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>description</Label>
                            <Input
                                type="string"
                                name="description"
                                id="description"
                                placeholder="description"
                                value={ description }
                                onChange={ (e) => this.handleChange(e) }
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>facilities</Label>
                            <Input
                                type="string"
                                name="facilities"
                                id="facilities"
                                placeholder="facilities"
                                value={ facilities }
                                onChange={ (e) => this.handleChange(e) }
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>picture_name</Label>
                            <Input
                                type="string"
                                name="picture_name"
                                id="picture_name"
                                placeholder="picture_name"
                                value={ picture_name }
                                onChange={ (e) => this.handleChange(e) }
                            />
                        </FormGroup>
                    </Col>
                    <Button>Submit</Button>
                </Form>
            </Container>
        )
    }
}

CreateRoom.propTypes = {
    user: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    createRoom: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user,
    error: state.error
});

export default connect(mapStateToProps, { createRoom })(CreateRoom);