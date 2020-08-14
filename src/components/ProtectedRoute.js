import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, props, ...rest }){
    // console.log('Main props', props);
    return (
        <Route
            {...rest}
            render={(props1) => {
                // console.log('These are the props');;
                // console.log(props);
                if (props.auth) {
                    return <Component {...props1} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: {
                                    from: props1.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};


export default ProtectedRoute;
