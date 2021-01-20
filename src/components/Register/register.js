import axios from 'axios'
import React, {useState} from 'react'
import './register.scss'

const Register = (props) => {
    const [user, setUser] = useState({
        email: '',
        profile_pic: '',
        username: '',
        password: ''
    })

    function handleChange(e) {
        setUser((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }
    function registerUser() {
        axios.post('/api/auth/register', user).then(res => {
            props.history.push('/login')
        }).catch(err => {
            console.log(err)
            alert(err)
        })
    }

    return (
        <div className='register'>
            <div className='register-container'>
                <h1 className='register-title'>The Workout</h1>
                <div className='register-box'>
                    <h2 className='register-email'>Email</h2>
                <input placeholder='Email' value={user.email} name='email' onChange={e => handleChange(e)}/>
                </div>
                <div className='register-box'>
                <h2 className='register-profile'>Profile Pic</h2>
                <input placeholder='Please use an image url' value={user.profile_pic} name='profile_pic' onChange={e => handleChange(e)} />
                </div>
                <div className='register-box'>
                <h2 className='register-text'>Username</h2>
                <input placeholder='Username' value={user.username} name='username' onChange={e => handleChange(e)}/>
                </div>
                <div className='register-box'>
                <h2 className='password-text'>Password</h2>
                <input placeholder='Password' value={user.password} type='password' name='password' onChange={e => handleChange(e)}/>
                </div>
                <div className='register-button-container'>
                    <button onClick={registerUser}>Create Account</button>
                </div>
            </div>
        </div>
    )
}

export default Register