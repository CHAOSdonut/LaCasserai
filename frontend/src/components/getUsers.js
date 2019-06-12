import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUsers } from "../actions/userActions";
import PropTypes from 'prop-types';

class getUserList extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <p>hoi</p>
        )
    }

}

getUserList.propTypes = {
  getUsers: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, { getUsers })(getUserList);