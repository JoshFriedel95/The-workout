import React, {useState} from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import './plans.scss'

function Plans() {
  const [product, setProduct] = useState({
    name: 'Exercise & Nutrition plan',
    nutritionPrice: '$50',
    exercisePrice: '$75',
    bothPrice: '$150',
    productBy: 'The-Workout'
  })
  const makePayment = token => {
      return axios.post('http://localhost3050/plans') 
  }
  return(
    <div className='plan'>
      <div className='plan-container'>
    <StripeCheckout stripeKey='pk_test_51I9DuCGoVeZrh9nCpfMq5rsi8KUx5DMFM6dSKI83V7QFo4ZFMXaJ3AbFDnwRjE6OcgKIhVUQnbDx7Lz52dBARIvJ006cCmKtJr'
    token={makePayment}
    name='Diet & Exercise Plans'
    shippingAddress
    billingAddress>
      <div className='nutrition'>
        <h1>Nutrition Plan</h1>
        <ol>
          <li>Six Week nutrition guide tailored just for you</li>
          <li>Bi-weekly updates & changes if need be</li>
          <li>Weekly Check-ins from your trainer</li>
          <li>Ability to contact your trainer during the day</li>
        </ol>
      </div>
        <button onClick={() => setProduct({
      nutritionPrice: 'Purchased',
      exercisePrice: '$75',
      bothPrice: '$150'
      })}>{product.nutritionPrice}</button>
      <h1>Exercise Plan</h1>
      <ol>
        <li>Six week workout plan tailored for your needs</li>
        <li>Weekly check-ins from your trainer</li>
        <li>Ability to contact your trainer during the day</li>
      </ol>
      <button onClick={() => setProduct({
      nutritionPrice: '$50',
      exercisePrice: 'Purchased',
      bothPrice: '$150'
      })}>{product.exercisePrice}</button>
      <h1>Diet & Exercise Plan</h1>
      <ol>
        <li>Eight week workout & diet plan</li>
        <li>Daily check-ins from your trainer</li>
        <li>Ability to contact your trainer during the day</li>
      </ol>
      <button onClick={() => setProduct({
      nutritionPrice: '$50',
      exercisePrice: '$75',
      bothPrice: 'Purchased'
      })}>{product.bothPrice}</button>
      </StripeCheckout>
      </div>
    </div>
  )
}

export default Plans