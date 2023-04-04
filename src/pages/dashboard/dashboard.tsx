import { FC, ReactElement, useEffect } from 'react';
import { customTheme } from '../../theme/customTheme';
import { Grid } from '@mui/material';
import TaskArea from '../../components/taskArea/TaskArea';
import Sidebar from '../../components/sidebar/Sidebar';
const Dashboard: FC = (): ReactElement => {
    console.log(customTheme);
    useEffect(() => {
        console.log('hello');
    }, []);
    return (
        <Grid container spacing={2}>
            <TaskArea />
            <Sidebar />
        </Grid>
    );
};

export default Dashboard;
