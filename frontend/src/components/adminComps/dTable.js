import React from 'react';
import { Table, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Popup from "reactjs-popup";
import { getRooms, deleteRoom } from "../../actions/roomAction";
import UpdateFrom from './updateForm';

class DTable extends React.Component {

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
                    <tr>
                        <th scope="row">{i.room_nr}</th>
                        <td>{i.price}</td>
                        <td>{i.description}</td>
                        <td>{i.facilities}</td>
                        <td>{i.picture_name}</td>
                        <td><Popup trigger={<Button color="primary">update</Button>} position="bottom center">
                                <div> <UpdateFrom id={i._id} room_nr={i.room_nr} price={i.price} description={i.description} facilities={i.facilities} picture_name={i.picture_name} /></div>
                            </Popup>
                        </td>
                        <td><Button color="primary" onClick={() => this.props.deleteRoom(i._id)}>delete</Button></td>
                    </tr>
                )
            };

            const generatedForm = this.props.room.rooms.map(tableElement);
            return (
                <Table>
                    <thead>
                    <tr>
                        <th>room_nr</th>
                        <th>price</th>
                        <th>description</th>
                        <th>facilities</th>
                        <th>picture_name</th>
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

DTable.propTypes = {
    room: PropTypes.object.isRequired,
    getRooms: PropTypes.func.isRequired,
    deleteRoom: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    room: state.room
});

export default connect(mapStateToProps, { getRooms, deleteRoom })(DTable);