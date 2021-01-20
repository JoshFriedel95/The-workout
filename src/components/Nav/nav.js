import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUser, logoutUser} from '../../ducks/userReducer'
import axios from 'axios'
import './nav.scss'


const Nav = (props) => {
    function logout() {
        axios.post('/api/auth/logout').then(res => {
            props.logoutUser()
        }
        )}
    return (
    <div className='nav-bar'>
        <div className='box'>
        <h1>THE WORKOUT</h1>
        </div>
        <img src={props.match.profilePic} alt={props.match.username}/>
        <Link to='/'>
            <h3>Home</h3>
        </Link>
        <Link to='/plans'>
            <h3>Plans</h3>
        </Link>
        <Link to='/contact'>
            <h3>Contact</h3>
        </Link>
        <Link to='/reviews'>
            <h3>Reviews</h3>
        </Link>
        <Link to='/profile/:profile_id'>
            <h3>Profile</h3>
        </Link>
        <h2 className='center-me'>Welcome {props.username}</h2>
        <div className='box-2'>
        <Link to='/login'>
            <h4>Login</h4>
        </Link>
            <h4>|</h4>
        <Link to='/register'>
            <h4>Register</h4>
        </Link>
        </div>
        <Link to='/' onClick={() => logout()}>
            <h3>Logout</h3>
        </Link>
    </div>
     )
    }

function mapStateToProps(state){
    return state;
}
export default withRouter(connect(mapStateToProps, {updateUser, logoutUser})(Nav))
