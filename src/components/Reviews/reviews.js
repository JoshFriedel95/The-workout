import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import './reviews.scss'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const url = axios.get('/api/reviews')
    useEffect(() => {
        url.then (res => {
            setReviews(res.data)
        })
    },[url])

    function deleteReview(id) {
        console.log(id)
        axios.delete(`/api/reviews/${id}`)
        .then(() => axios.get('/api/reviews'))
        .catch(err => console.log(err))
    }

    const reviewsMapped = reviews.map(reviewObj => {
       return( 
        <div  key={reviewObj.comment_id}>
            
                
               <div className='delete-button'>
            <button onClick={() => deleteReview(reviewObj.comment_id)}>Delete Review</button>
                </div>
            <div className='author-box'>
            <h2 className='reviews-title'>{reviewObj.main_title}</h2>
            <h5 className='reviews-content'>{reviewObj.content}</h5>
            <h4 className='reviews-name'>By: {reviewObj.username}</h4>
            <img className='reviews-pic' src={reviewObj.profile_pic} alt='Author'/>
            </div>
            
        </div>
        )
    })

    return( 
    <div className='review'>
       <h1 className='reviews'>Reviews</h1>
        {reviewsMapped}
        <div id='button-container'>
            <Link to='/create'>
        <button>Create review</button>
        </Link>
        </div> 
    </div>)
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Reviews);