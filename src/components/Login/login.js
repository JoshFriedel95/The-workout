import React, {useState} from 'react'
import axios from 'axios'
import {updateUser} from '../../ducks/userReducer'
import {connect} from 'react-redux'
import {useAlert} from 'react-alert'
import './login.scss'

const Login = props => {
    const [input, setInput] = useState({
        username: '',
        password: '',
        error: ''
    });
    const alert = useAlert()
    function handleChange(e) {
       setInput((prev) => {
           return {...prev, [e.target.name]: e.target.value}
       })
    }
   
     function loginUser() {
        
        axios.post('/api/auth/login', input)
        .then(res => {
            console.log(res)
            props.updateUser(res.data)
            props.history.push('/')
        }).catch(err => {
            console.log(err)
            setInput({error: 'Incorrect username or password!'})
            alert.error('Incorrect username or password!')
        })
    }
    return (
    <div className='login'>
        <div className='login-container'>
            <h1 className='login-title'>The Workout</h1>
            <div className='login-box'>
                <h2 className='login-text'>Username</h2>
                <input placeholder='Username' className='login-input-box' value={input.username} name='username' onChange={e => handleChange(e)}/>
            </div>
            <div className='login-box'>
                <h2 className='password-text'>Password</h2>
                <input placeholder='Password' className='login-input-box' value={input.password} type='password' name='password' onChange={e => handleChange(e)}/>
            </div>
            <div className='login-button-container'>
                <button onClick={loginUser}>Login</button>
            </div>
        </div>
    </div>
    )
}


export default connect(null, {updateUser})(Login)