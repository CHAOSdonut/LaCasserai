import React from 'react';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Alertmsg extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            errorCode: '',
            errorMsg: ''
        };

        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss() {
        this.setState({visible: false});
    };

    render() {
        return (
                <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
                    Login error:  { this.props.errorCode }, { this.props.errorMsg }

                </Alert>
        )
    };
}

Alertmsg.propTypes = {
    error: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    error: state.error
});

export default connect(mapStateToProps, { })(Alertmsg);