import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
import { AuthRouter } from './AuthRouter';
import { PublicRoute } from './PublicRoute';

export const MainRouter = (): JSX.Element => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { token } = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [token]);

    return (
        <Router>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                }}
            >
                <Switch>
                    <PublicRoute
                        isAuthenticated={false}
                        component={AuthRouter}
                        path="/auth"
                    />
                </Switch>
            </Box>
        </Router>
    );
};
