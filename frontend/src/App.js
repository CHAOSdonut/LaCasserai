import React from 'react';
import {Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import getUserList from './components/getUsers';
import Rooms from './components/rooms';
import AdminHome from './components/adminComps/adminHome';
import CreateRoom from './components/adminComps/createRoom';
import AllRooms from './components/adminComps/allRooms';
import RoomInfo from './components/roomInfo';
import PrivateRoute from './components/privateRoute';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppNavbar from './components/navbar';
import history from './history'

function App(props) {
    return (
        <div className="App">
            <Router history={history}>
                <AppNavbar/>
                <PrivateRoute exact path="/admin" component={AdminHome} auth={props.user.user.role}/>
                <PrivateRoute exact path="/admin/createroom" component={CreateRoom} auth={props.user.user.role}/>
                <PrivateRoute exact path="/admin/getrooms" component={AllRooms} auth={props.user.user.role}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/getUsers" component={getUserList}/>
                <Route exact path="/rooms" component={Rooms}/>
                <Route exact path="/roominfo" component={RoomInfo}/>
            </Router>
        </div>
    );
}

PrivateRoute.propTypes = {
    user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    user: state.user,
});

export default connect(mapStateToProps)(App);
