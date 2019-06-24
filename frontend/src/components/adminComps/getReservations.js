import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import RegTable from '../adminComps/regTable';

class GetReservations extends Component {
    constructor(props) {
        super(props);

        this.state = this.props.location.state
    }

    render(){
        return (
            <div className="regtable">
                <p><RegTable/></p>
            </div>
        )

    }

}

GetReservations.propTypes = {

};

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {})(GetReservations);