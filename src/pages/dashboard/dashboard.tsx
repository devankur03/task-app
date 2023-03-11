import { FC, ReactElement } from 'react';
import { customTheme } from '../../theme/customTheme';
import { Grid } from '@mui/material';
import TaskArea from '../../components/taskArea/TaskArea';
import Sidebar from '../../components/sidebar/Sidebar';
const Dashboard: FC = (): ReactElement => {
    console.log(customTheme);
    return (
        <Grid container spacing={2}>
            <TaskArea />
            <Sidebar />
        </Grid>
    );
};

export default Dashboard;
