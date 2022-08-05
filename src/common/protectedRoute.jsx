import React from 'react';
import { Route, Navigate  } from 'react-router-dom';
import auth from '../services/authService';

const ProtectedRoute = ({path, component: Component, render, ...rest}) => {
    return ( 
        <Route
            path={path}
            {...rest}
            render={props => {
                if (!auth.getCurrentUser()) return <Navigate  to={{
                    pathname: '/login',
                    // current location before redirecting user to the login page
                    state: {from: props.location}
                }} />;
                    return Component ? <Component {...props} /> : render(props);
            }}
        />
     );
}
 
export default ProtectedRoute;