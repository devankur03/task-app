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
    filterTasks,
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
    const { tasks, taskStatus, filterStatus }: TaskDetailState = useSelector(
        (state: RootState) => {
            return {
                tasks: state.taskListValues.tasks,
                taskStatus: state.taskListValues.taskStatus,
                filterStatus: state.taskListValues.filterStatus,
            };
        },
    );

    useEffect(() => {
        getAllTasks()
            .then((res: any) => {
                dispatch(setTasks(res.data.tasks));
                dispatch(setTasksStatus(res.data.statusCounts));
            })
            .catch((e: any) => {
                console.log(e);
            });
    }, []);

    const onSelectStatus = (type: string): void => {
        if (filterStatus === type) {
            dispatch(filterTasks(''));
        } else {
            dispatch(filterTasks(type));
        }
    };

    return (
        <>
            <Grid
                item
                xs={6}
                md={8}
                px={4}
                sx={{ position: 'fixed', top: 0, width: '100%' }}
            >
                <Box mb={2} px={2}>
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
                        mb={4}
                    >
                        <TaskCounter
                            status={Status.todo}
                            count={taskStatus?.todo || '0'}
                            onClickHandler={onSelectStatus}
                            isActive={
                                filterStatus?.toLowerCase() ===
                                Status.todo.toLowerCase()
                            }
                        />
                        <TaskCounter
                            status={Status.inProgress}
                            count={taskStatus?.inProgress || '0'}
                            onClickHandler={onSelectStatus}
                            isActive={
                                filterStatus?.toLowerCase() ===
                                Status.inProgress.toLowerCase()
                            }
                        />
                        <TaskCounter
                            status={Status.completed}
                            count={taskStatus?.completed || '0'}
                            onClickHandler={onSelectStatus}
                            isActive={
                                filterStatus?.toLowerCase() ===
                                Status.completed.toLowerCase()
                            }
                        />
                    </Grid>
                </Grid>

                <Container
                    className="tasklist--container"
                    maxWidth="md"
                    sx={{ height: '60vh', overflowY: 'auto' }}
                >
                    <Box
                        display={'flex'}
                        flexDirection="column"
                        alignItems={'center'}
                        sx={{ gridGap: '2rem' }}
                    >
                        {(filterStatus
                            ? tasks.filter(
                                  (item) =>
                                      item.status?.toLowerCase() ===
                                      filterStatus.toLowerCase(),
                              )
                            : tasks
                        ).map((item: TaskListDetails) => {
                            return (
                                <TaskDetails key={item.id} taskData={item} />
                            );
                        })}
                    </Box>
                </Container>
            </Grid>
        </>
    );
};
export default React.memo(TaskArea);
