import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

export const LightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
