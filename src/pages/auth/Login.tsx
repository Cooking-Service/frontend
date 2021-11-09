import { Box, Grid, Paper, TextField, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import React from 'react';
import BackgroundImage from '../../assets/images/ingredients.jpg';

const backgroundStyle: SxProps<Theme> = {
    width: '100%',
    height: '100%',
    position: 'fixed',
    background: 'not-repeat center center',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    zIndex: -1,
};

export const Login = (): JSX.Element => {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ width: '100%', height: '100vh' }}
        >
            {/* <Box component="div" sx={backgroundStyle} /> */}
        </Grid>
    );
};
