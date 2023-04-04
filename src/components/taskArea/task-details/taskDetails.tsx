import { FC, ReactElement } from 'react';
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
import { TaskListDetails } from '../../../features/task-list/taskListSlice';

type PropsDetauls = {
    taskData: TaskListDetails;
};

const getBorderColorByStatus = (status: string) => {
    if (status === 'todo') {
        return '1px solid #ff3232';
    } else if (status === 'inProgress') {
        return '1px solid #ffa500';
    } else {
        return '1px solid #76ff7a';
    }
};

const TaskDetails: FC<PropsDetauls> = ({
    taskData,
}: PropsDetauls): ReactElement => {
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
                            defaultChecked
                        />
                        <Button
                            disabled={taskData.status === 'completed'}
                            variant="contained"
                            size="medium"
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
