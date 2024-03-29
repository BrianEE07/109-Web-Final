import React from "react";
import { Redirect, Route } from "react-router-dom";
 
import { useAuthState } from '../Context'
 
const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
 
    const userDetails = useAuthState()
    console.log(userDetails)
    console.log(isPrivate, Boolean(userDetails.success))
    return (
        <Route
            path={path}
            render={props =>
                (isPrivate && !Boolean(userDetails.success)) ? (
                    <Redirect
                        to={{ pathname: "/login" }}
                    />
                ) : 
                    (<Component {...props} />)
            }
            {...rest}
        />
    )
}
 
export default AppRoutes