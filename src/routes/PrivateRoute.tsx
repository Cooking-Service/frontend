import React from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router';
import { RoutesProps } from '../types/types';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}: RoutesProps): JSX.Element => {
    return (
        <Route
            {...rest}
            // eslint-disable-next-line
            component={(props: RouteComponentProps) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/auth" />
                )
            }
        />
    );
};
