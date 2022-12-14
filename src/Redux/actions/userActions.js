import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT
} from "../constants/userConstants"

import axios from 'axios'

// Add new User
export const register = (name, email, password, image) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST
    })
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const  {data}  = await axios.post('https://realestateblockchainweb3.herokuapp.com/api/auth/register', {name, email, password, image} ,
     config)
    console.log(data)

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response.data
    })
  }
}


// Login user
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    })
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const  {data}  = await axios.post('https://realestateblockchainweb3.herokuapp.com/api/auth/login', { email, password },
      config)

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } 
  catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:  error.response.data
     })
  }
}


// Logout user
export const logout = ()=> (dispatch)=>{
  localStorage.removeItem('userInfo')
  dispatch({
    type:USER_LOGOUT
  })
}