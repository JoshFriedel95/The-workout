import React, {useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import './createReview.scss'

const Create = (props) => {
    const [content, setContent] = useState({
        title: '',
        content: ''
    })

    function handleChange(e) {
        setContent((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    function sendReview(){
        axios.post('/api/review', content).then(res => {
            props.history.push('/reviews')
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className='creview'>
            <div className='top-black'></div>
            <div className='creview-container'>
                <h1>Leave us a review!</h1>
                <h2>Title</h2>
            <input placeholder='Title your review here'value={content.title} name='title' onChange={e => handleChange(e)}/>
            <h3>Review</h3>
            <textarea placeholder='Tell us what you think' value={content.content} name='content' onChange={e => handleChange(e)}/>
            <button onClick={sendReview}>Submit</button>
            </div>
        </div>
    )
}
function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Create)