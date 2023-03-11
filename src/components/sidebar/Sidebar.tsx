import { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';
import { customTheme } from '../../theme/customTheme';
import Profile from '../profie/profile';
import TaskForm from '../task-form/form';

const Sidebar: FC = (): ReactElement => {
    return (
        <Grid
            item
            xs={6}
            md={4}
            sx={{
                height: '100vh',
                position: 'fixed',
                right: 0,
                top: 0,
                width: '100%',
                display: 'flex',
                background: customTheme?.palette?.background?.paper,
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Profile />
            <TaskForm />
        </Grid>
    );
};
export default Sidebar;
