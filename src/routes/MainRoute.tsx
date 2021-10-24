import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';

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
            <div>
                <Switch>
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
};
