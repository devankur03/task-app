import { FC, ReactElement } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { customTheme } from '../../theme/customTheme';
import Container from '@mui/material/Container';
import dayjs from 'dayjs';
import TaskCounter from './task-counter/taskCounter';
import TaskDetails from './task-details/taskDetails';
import { Status } from './enum/status';

const TaskArea: FC = (): ReactElement => {
    return (
        <Grid
            item
            xs={6}
            md={8}
            px={4}
            sx={{ position: 'fixed', top: 0, width: '100%' }}
        >
            <Box mb={8} px={4}>
                <h2>
                    Status of your tasks as you are on{' '}
                    {dayjs(new Date()).format('dddd, MMMM D, YYYY')}
                </h2>
            </Box>

            <Grid container display="flex" justifyContent="center">
                <Grid
                    item
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                    alignItems="center"
                    md={10}
                    xs={12}
                    mb={8}
                >
                    <TaskCounter status={Status.todo} count={2} />
                    <TaskCounter status={Status.inProgress} count={2} />
                    <TaskCounter status={Status.completed} count={2} />
                </Grid>
            </Grid>

            <Container maxWidth="md">
                <Box
                    display={'flex'}
                    flexDirection="column"
                    alignItems={'center'}
                    sx={{ gridGap: '2rem' }}
                >
                    <TaskDetails />
                    <TaskDetails />
                </Box>
            </Container>
        </Grid>
    );
};
export default TaskArea;
