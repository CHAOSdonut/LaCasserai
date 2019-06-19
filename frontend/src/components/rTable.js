import React from 'react';
import { Table} from 'reactstrap';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRooms } from "../actions/roomAction";
import history from '../history';


class RTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            rooms: []
        };
        this.props.getRooms();
    }

    render() {
        const tableElement = (i) => {
            return (
                <tr onClick={() => history.push('/roominfo', { ...i })}>
                    <th scope="row">{i.room_nr}</th>
                    <td>{i.description}</td>
                    <td>{i.facilities}</td>
                    <td>&euro; {i.price}</td>
                </tr>
            )
        };

        const generatedForm = this.props.room.rooms.map(tableElement);
        return (
            <Table hover>
                <thead>
                <tr>
                    <th>room number</th>
                    <th>description</th>
                    <th>facilities</th>
                    <th>price</th>
                </tr>
                </thead>
                <tbody>
                {generatedForm}
                </tbody>
            </Table>
        );
    }
}

RTable.propTypes = {
    room: PropTypes.object.isRequired,
    getRooms: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    room: state.room
});

export default connect(mapStateToProps, { getRooms })(RTable);