import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import history from '../../history';
import '../../styles/adminHome.css';

class AdminHome extends React.Component {
    render() {
        return (
            <div className="adminHome">
                <h3>admin home</h3>
                <p><Button color="primary" onClick={() => history.push('/admin/createroom')}>CreateRoom</Button></p>
                <p><Button color="primary" onClick={() => history.push('/admin/getrooms')}>GetRooms</Button></p>
                <p><Button color="primary" onClick={() => history.push('/admin/getreservations')}>GetReservations</Button></p>
            </div>
        )
    };
}

AdminHome.propTypes = {
    user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    user: state.user,
});

export default connect(mapStateToProps)(AdminHome);