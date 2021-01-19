// const ROOT_URL = 'https://secret-hamlet-03431.herokuapp.com';
// import axios from "../Pages/axios"
import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:4000/users' })

export default async function checkUser(dispatch, LoginPayload) {
  
  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    const { data : msg } = await instance.post('/login', LoginPayload)
    window.localStorage.setItem("account", LoginPayload.account)
    // localStorage.removeItem('account');
    window.localStorage.setItem("password", LoginPayload.password)
    console.log(window.localStorage.getItem("password"))
    console.log(msg)
    if(msg === 'Account Incorrect'){
      dispatch({ type: 'LOGIN_ERROR'});
    }else if(msg === 'Password Incorrect'){
      dispatch({ type: 'LOGIN_ERROR'});
    }else {
      dispatch({ type: 'LOGIN_SUCCESS'});
    }
    return msg
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
}
export  async function signUp(dispatch, signUpPayload) {
  // const requestOptions = {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(loginPayload),
  // };
  window.localStorage.setItem("email", signUpPayload.email)
  window.localStorage.setItem("account", signUpPayload.account)
  window.localStorage.setItem("password", signUpPayload.password)
  window.localStorage.setItem("chicken", signUpPayload.chicken)
  try {
    dispatch({ type: 'REQUEST_SIGNUP' });
    const { data : msg } = await instance.post('/signup', signUpPayload)
    // let response = await fetch(`${ROOT_URL}/login`, requestOptions);
    // let data = await response.json();

    console.log(msg)
    if(msg === 'Email duplicated'){
    // if (data.user) {
      dispatch({ type: 'SIGNUP_ERROR'});
    //   localStorage.setItem('currentUser', JSON.stringify(data));
    //   return data
    // }
    }else if(msg === 'Account duplicated'){
      dispatch({ type: 'SIGNUP_ERROR'});
    }else {
      dispatch({ type: 'SIGNUP_SUCCESS'});
    }
    return msg
  //   dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
  //   return;
  } catch (error) {
    dispatch({ type: 'SIGNUP_ERROR', error: error });
  }
}
 
// export async function logout(dispatch) {
//   dispatch({ type: 'LOGOUT' });
//   localStorage.removeItem('currentUser');
//   localStorage.removeItem('token');
// }