import React, { FC, ReactElement, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { customTheme } from '../../theme/customTheme';
import Container from '@mui/material/Container';
import dayjs from 'dayjs';
import TaskCounter from './task-counter/taskCounter';
import TaskDetails from './task-details/taskDetails';
import { Status } from './enum/status';
import { getAllTasks } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import {
    TaskDetailState,
    TaskListDetails,
    setTasks,
    setTasksStatus,
} from '../../features/task-list/taskListSlice';
import { RootState } from '../../store';

// type TaskListResponse = {
//     tasks: Array<TaskDetails>;
//     statusCounts: Object;
// };

const TaskArea: FC = (): ReactElement => {
    const dispatch = useDispatch();
    const { tasks, taskStatus }: TaskDetailState = useSelector(
        (state: RootState) => {
            return {
                tasks: state.taskListValues.tasks,
                taskStatus: state.taskListValues.taskStatus,
            };
        },
    );
    useEffect(() => {
        console.log('LOggin data', tasks, taskStatus);
        getAllTasks()
            .then((res: any) => {
                console.log(res.data);

                dispatch(setTasks(res.data.tasks));
                dispatch(setTasksStatus(res.data.statusCounts));
            })
            .catch((e: any) => {
                console.log(e);
            });
    }, []);

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
                    <TaskCounter
                        status={Status.todo}
                        count={taskStatus?.todo || '0'}
                    />
                    <TaskCounter
                        status={Status.inProgress}
                        count={taskStatus?.inProgress || '0'}
                    />
                    <TaskCounter
                        status={Status.completed}
                        count={taskStatus?.completed || '0'}
                    />
                </Grid>
            </Grid>

            <Container maxWidth="md" sx={{ height: '60vh', overflowY: 'auto' }}>
                <Box
                    display={'flex'}
                    flexDirection="column"
                    alignItems={'center'}
                    sx={{ gridGap: '2rem' }}
                >
                    {tasks.map((item: TaskListDetails) => {
                        return <TaskDetails key={item.id} taskData={item} />;
                    })}

                    {/* <TaskDetails />
                    <TaskDetails />
                    <TaskDetails />
                    <TaskDetails /> */}
                </Box>
            </Container>
        </Grid>
    );
};
export default React.memo(TaskArea);
