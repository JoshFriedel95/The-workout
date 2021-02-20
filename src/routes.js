import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Form from './components/Form/form'
import Home from './components/Home/home'
import Plans from './components/Plans/plans'
import Login from './components/Login/login'
import Reviews from './components/Reviews/reviews'
import Register from './components/Register/register'
import CreateReview from './components/CreateReview/createReview'

export default (
    <Switch>
        <Route exact path = '/' component={Home} />
        <Route path = '/plans' component={Plans} />
        <Route path = '/contact' component={Form}/>
        <Route path = '/login' component={Login}/>
        <Route path = '/reviews' component={Reviews} />
        <Route path = '/register' component={Register} />
        <Route path = '/create' component={CreateReview} />
    </Switch>
)