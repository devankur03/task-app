import { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';
import { customTheme } from '../../theme/customTheme';

const TaskArea: FC = (): ReactElement => {
    return (
        <Grid item xs={6} md={8}>
            Dashboard Content
        </Grid>
    );
};
export default TaskArea;
