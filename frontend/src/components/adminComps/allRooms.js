import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DTable from './dTable';

class AllRooms extends React.Component {
    render() {
        return (
            <div>
                <DTable />
            </div>
        )
    }
}

AllRooms.propTypes = {
    user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    user: state.user,
});

export default connect(mapStateToProps)(AllRooms);