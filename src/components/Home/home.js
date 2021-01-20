import React, {useState, useEffect} from 'react'
import './home.scss'
import axios from 'axios'


const Home = () => {
    const [reviews, setReviews] = useState([])
    const url = axios.get('/api/review')
    useEffect(() => {
        url.then (res => {
            setReviews(res.data)
        })
    },[url])
    const reviewsMapped = reviews.map(reviewObj => {
        return( 
         <div key={reviewObj.comment_id}>
             <p className='review-name'>By: {reviewObj.username}</p>
             <p className='review-title'>{reviewObj.main_title}</p>  
             <p className='review-content'>{reviewObj.content}</p>
             <img src={reviewObj.profile_pic} alt='Author' className='review-pic'/>
         </div>
         )
     })
    return (
    <div className='home'>
        <div className='review'>
            <p className='review-us'>What people are saying</p>
        {reviewsMapped}
        </div>
        <div className='trainer-two'></div>
        <div className='background-bottom'>
        <div className='trainer-one'></div>
            <div className='top-right'>
                <p>
                The Ultimate Online Personal Training Plans
                <p className='lower'>
                Reach your body goals, boost your energy for life anytime, everywhere
                </p>
                </p>
            </div>

        <div className='left-container'>
            <article> Our trainers follow our 5 key pillars of fitness to get you in top condition
                <ul>
                    <p><h2>POSTURE</h2>Correcting your posture will reduce stress and strain on your body. You'll stand taller, move quicker, and feel less fatigue.</p>
                    <p><h2>CORE</h2>Your core is part of almost every move you make. Strong core muscles act as a stabilizer, making moving safer and more efficient.</p>
                    <p><h2>MOBILITY</h2>Good mobility allows your body to move the way it was designed to move - pain free and with a good range of motion.</p>
                    <p id='strength'><h2>STRENGTH</h2>Strength training helps you develop strong bones, manage weight and help you do everyday activities better and easier.</p>
                    <p id='cardio'><h2>CARDIO</h2> Improving your cardio will strengthen your stamina and endurance so you can work harder for long periods and burn more calories.</p>
                </ul>
            </article>
        </div>
        </div>
        <div className='background-top'>
            <div className='right-container'>
                <p className='title'>WHAT WE OFFER</p>
                <div id='one'>
                    <p id='title'>WORKOUT PROGRAM</p>
                    Affordable and effective workout programs.
                </div>
                <div className='two'>
                    <p id='title'>MEAL PLAN</p>
                    Plans built with dietitians & nutritionists.
                </div>
                <div className='three'>
                    <p id='title'>SUPPORT</p>
                    We will be there with you every step of the way, our trainers are eager to help you anytime of the day.
                </div>
                <div id='inner-right-container'>
                    <p className='bottom-title'>ABOUT US</p>
                    <p id='content'>We believe fitness should be accessible to everyone, everywhere, regardless of income, experience, or access to a gym. We are here to help you achieve your goals, whatever you need, whatever it takes, we will do everything we can to get you there.</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home