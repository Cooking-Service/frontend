import React from 'react';
import { RouteProps } from 'react-router';

export type RoutesProps = RouteProps & {
    isAuthenticated: boolean;
    component: React.ComponentType;
};
