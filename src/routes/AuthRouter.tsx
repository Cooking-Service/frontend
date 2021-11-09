import { Box } from '@mui/material';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Login } from '../pages/auth/Login';

export const AuthRouter = (): JSX.Element => {
    return (
        <Box
            component="div"
            sx={{
                width: '100%',
                height: '100%',
            }}
        >
            <Switch>
                <Route path="/auth/login" component={Login} />

                <Redirect to="/auth/login" />
            </Switch>
        </Box>
    );
};
