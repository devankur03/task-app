import { FC, ReactElement, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import dayjs from 'dayjs';
import {
    TaskListDetails,
    updateTaskInfo,
} from '../../../features/task-list/taskListSlice';
import { updateTask } from '../../../api';
import { useDispatch } from 'react-redux';

type PropsDetauls = {
    taskData: TaskListDetails;
};

const getBorderColorByStatus = (status: string) => {
    if (status?.toLowerCase() === 'todo') {
        return '1px solid #ff3232';
    } else if (status?.toLowerCase() === 'inprogress') {
        return '1px solid #ffa500';
    } else {
        return '1px solid #76ff7a';
    }
};

const TaskDetails: FC<PropsDetauls> = ({
    taskData,
}: PropsDetauls): ReactElement => {
    const [taskSwitchStatus, setTaskSwitchStatus] = useState(false);
    const dispatch = useDispatch();

    const updateTaskStatusInfo = (status: string, isChanged: boolean) => {
        updateTask(taskData.id, { status })
            .then((res: any) => {
                setTaskSwitchStatus(isChanged);
                dispatch(updateTaskInfo(res.data));
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const updateTaskStatusHandler = (e: any) => {
        let status = e.target.checked ? 'inProgress' : 'todo';
        updateTaskStatusInfo(status, e.target.checked);
    };

    useEffect(() => {
        if (taskData.status?.toLowerCase() === 'todo') {
            setTaskSwitchStatus(false);
        } else {
            setTaskSwitchStatus(true);
        }
    }, [taskData]);

    return (
        <Card
            variant="outlined"
            sx={{
                width: '100%',
                border: getBorderColorByStatus(taskData.status),
            }}
        >
            <CardContent>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={10}>
                            <Typography variant="h6" component="div">
                                {taskData.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Chip
                                label={`${dayjs(new Date(taskData.date)).format(
                                    'D MMM, YYYY',
                                )}`}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>

                    <Typography sx={{ mt: 2.8 }} variant="body2">
                        {taskData.description}
                    </Typography>

                    <Box display={'flex'} justifyContent="space-between" mt={3}>
                        <Switch
                            {...{ inputProps: { 'aria-label': 'Switch demo' } }}
                            checked={taskSwitchStatus}
                            disabled={
                                taskData.status?.toLowerCase() === 'completed'
                            }
                            onChange={(e) => updateTaskStatusHandler(e)}
                        />
                        <Button
                            disabled={taskData.status === 'completed'}
                            variant="contained"
                            size="medium"
                            onClick={() => {
                                updateTaskStatusInfo('completed', true);
                            }}
                        >
                            Mark Complete
                        </Button>
                    </Box>
                </Container>
            </CardContent>
        </Card>
    );
};

export default TaskDetails;
