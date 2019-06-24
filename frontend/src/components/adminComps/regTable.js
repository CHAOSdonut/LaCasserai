import React from 'react';
import { Table, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getReservations } from '../../actions/reservationActions';
import PropTypes from 'prop-types';
import Popup from "reactjs-popup";
import UpdateFrom from './updateForm';

class RegTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            rooms: []
        };
        this.props.getReservations();
    }
    render() {
        const tableElement = (i) => {
            return (
                <tr>
                    <td>{i.user}</td>
                    <td>{i.room}</td>
                    <td>{i.from_date}</td>
                    <td>{i.till_date}</td>
                    <td><Popup trigger={<Button color="primary">update</Button>} position="bottom center">
                        <div> <UpdateFrom id={i._id} room_nr={i.room_nr} price={i.price} description={i.description} facilities={i.facilities} picture_name={i.picture_name} /></div>
                    </Popup>
                    </td>
                    <td><Button color="primary" onClick={() => this.props.deleteRoom(i._id)}>delete</Button></td>
                </tr>
            )
        };

        const generatedForm = this.props.reservation.reservations.map(tableElement);
        return (
            <Table>
                <thead>
                <tr>
                    <th>user</th>
                    <th>room</th>
                    <th>from_date</th>
                    <th>till_date</th>
                    <th>update</th>
                    <th>delete</th>
                </tr>
                </thead>
                <tbody>
                {generatedForm}
                </tbody>
            </Table>
        );
    }
}

RegTable.propTypes = {
    getReservations: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user,
    reservation: state.reservation
});

export default connect(mapStateToProps, { getReservations })(RegTable);