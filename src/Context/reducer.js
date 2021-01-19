import React, { useReducer } from "react";
 
// let user = localStorage.getItem("currentUser")
//   ? JSON.parse(localStorage.getItem("currentUser")).user
//   : "";
// let token = localStorage.getItem("currentUser")
//   ? JSON.parse(localStorage.getItem("currentUser")).auth_token
//   : "";
 
export const initialState = {
//   userDetails: "" || user,
//   token: "" || token,
  success: false,
  loading: false,
  errorMessage: null
};
 
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true
      };
      case "REQUEST_SIGNUP":
        return {
          ...initialState,
          loading: true
        };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        // user: action.payload.user,
        // token: action.payload.auth_token,
        success:true,
        loading: false
      };
      case "SIGNUP_SUCCESS":
        return {
          ...initialState,
          success:true,
          // user: action.payload.user,
          // token: action.payload.auth_token,
          loading: false
        };
    case "LOGOUT":
      return {
        ...initialState,
        // user: "",
        // token: ""
      };
 
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };
      case "SIGNUP_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };
 
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};