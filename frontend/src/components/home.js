import React, {Component} from 'react';
import '../styles/home.css';
import roomimg from '../img/006384-18-premier-junior-suite.jpg';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="grid">
                    <div className="homeContentWrapper">
                        <h1><p>Welkom bij La Casserai</p></h1>
                        <h3><p>bekijk gerust ons zomeraanbod</p></h3>
                        <p className="img"><img src={roomimg} alt="Room" /></p>
                        <p className="paddingDiv">"La Casserai, waar de klant nog echt koning is."</p>
                    </div>
                </div>
                <div className="midSection">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin eu est et laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum venenatis mauris eu justo mollis, et elementum neque facilisis. Duis malesuada, lectus eu elementum viverra, tortor ipsum vehicula enim, at fringilla quam lorem a turpis. Sed elementum sem eget porttitor volutpat. Cras dui nulla, egestas id tempus ut, mattis in metus. Nunc et lobortis sapien, sit amet lobortis eros. Donec vulputate, urna et efficitur sodales, nisi purus scelerisque justo, ut pellentesque felis erat eu enim. Mauris ut massa pharetra ipsum blandit lacinia. Curabitur at vestibulum sapien. Curabitur faucibus imperdiet lectus vel scelerisque. Phasellus ultricies consectetur magna, nec mollis enim lacinia non. Nam venenatis, neque sit amet malesuada mattis, neque metus tristique mi, nec tempor neque ante eu erat. Phasellus faucibus lacus arcu, non tincidunt libero gravida ut. Praesent eu fermentum arcu, quis pharetra leo. Cras nunc est, venenatis vitae felis non, imperdiet tempor neque
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin eu est et laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum venenatis mauris eu justo mollis, et elementum neque facilisis. Duis malesuada, lectus eu elementum viverra, tortor ipsum vehicula enim, at fringilla quam lorem a turpis. Sed elementum sem eget porttitor volutpat. Cras dui nulla, egestas id tempus ut, mattis in metus. Nunc et lobortis sapien, sit amet lobortis eros. Donec vulputate, urna et efficitur sodales, nisi purus scelerisque justo, ut pellentesque felis erat eu enim. Mauris ut massa pharetra ipsum blandit lacinia. Curabitur at vestibulum sapien. Curabitur faucibus imperdiet lectus vel scelerisque. Phasellus ultricies consectetur magna, nec mollis enim lacinia non. Nam venenatis, neque sit amet malesuada mattis, neque metus tristique mi, nec tempor neque ante eu erat. Phasellus faucibus lacus arcu, non tincidunt libero gravida ut. Praesent eu fermentum arcu, quis pharetra leo. Cras nunc est, venenatis vitae felis non, imperdiet tempor neque
                    </p>
                </div>
            </div>
        )
    }

}

export default Home;