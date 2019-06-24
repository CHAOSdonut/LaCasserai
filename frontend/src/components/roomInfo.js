import React, {Component} from 'react';
import '../styles/roomInfo.css';
import { Button } from 'reactstrap';
import history from '../history';

class RoomInfo extends Component {
    constructor(props) {
        super(props);

        this.state = this.props.location.state
    }

    render() {
        return (
            <div className="roominfo">
                <div className="left">
                    <h2><p>welkom in kamer {this.state.room_nr}</p></h2>
                    <p>Over deze kamer:<br/>{this.state.description}</p>
                </div>
                <div className="right">
                    <p>
                        Deze kamer bevat de volgende faciliteiten:<br/>
                        {this.state.facilities}
                    </p>
                    <p>Prijs:<br/>Deze kamer is beschikbaar voor &euro;{this.state.price} per nacht.</p>
                    <p><Button color="primary" onClick={() => history.push('/bookroom', { room: this.props.location.state })}>Boeken</Button></p>
                </div>
            </div>
        )
    }
}

export default RoomInfo;