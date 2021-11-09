import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { MainRouter } from './routes/MainRouter';
import { LightTheme } from './theme/themes';

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={LightTheme}>
                    <CssBaseline />
                    <Container maxWidth={false} disableGutters>
                        <MainRouter />
                    </Container>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
