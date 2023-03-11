import { createTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';

export const customTheme: ThemeOptions = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
            light: ' #e3f2fd',
            dark: '#42a5f5',
        },
        background: {
            paper: '#272727',
            default: '#121212',
        },
    },
});
