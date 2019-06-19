import React, {Component} from 'react';
import Rtable from './rTable';

class Rooms extends Component {
    render() {
        return (
            <div className="rooms">
                <p><h2>Our rooms: </h2></p>
                <p><Rtable /></p>
            </div>
        )
    }

}

export default Rooms;