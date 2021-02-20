const intialState = {
    id: null,
    username: '',
    profilePic: '',
    isLoggedIn: false
}

const UPDATE_USER = 'UPDATE_USER'
const LOGOUT_USER = 'LOGOUT_USER'

export function updateUser(userObj){
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}

export function logoutUser(){
    return{
        type: LOGOUT_USER
    }
}

export default function reducer(state = intialState, action){
    switch(action.type){
        case UPDATE_USER:
            return {...state, username: action.payload.username, profilePic: action.payload.profile_pic, id: action.payload.id, isLoggedIn: true}
        case LOGOUT_USER:
            return intialState
        default: 
            return state
    }
}