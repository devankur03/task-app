import { FC, ReactElement, useState } from 'react';
// should add web-vitals todo
import { ThemeProvider } from '@emotion/react';
import { customTheme } from './theme/customTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from './pages/dashboard/dashboard';

const App: FC = (): ReactElement => {
    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <Dashboard />
        </ThemeProvider>
    );
};

export default App;
