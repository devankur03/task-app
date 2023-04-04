import { FC, ReactElement, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import TaskNameInputField from './_taskNameInput';
import TaskDescription from './_taskDescriptionInput';
import Typography from '@mui/material/Typography';
import TaskDateField from './_taskDateField';
import TaskSelectBox from './_taskSelect';
import { useDispatch, useSelector } from 'react-redux';
import {
    changeTaskPriority,
    changeTaskStatus,
    resetTaskForm,
} from '../../features/task-form/taskFormSlice';
import { PRIORITY_OPTIONS, STATUS_OPTIONS } from '../../constants/staticData';
import { RootState } from '../../store';
import { createNewTask } from '../../api';
import dayjs from 'dayjs';

const TaskForm: FC = (): ReactElement => {
    const dispatch = useDispatch();
    const [isSuccess, setIsSuccess] = useState(false);
    const { taskName, taskDescription, taskPriority, taskStatus, dueDate } =
        useSelector((state: RootState) => state.taskFormValues);

    const onPriorityChangeHandler = (e: any): void => {
        dispatch(changeTaskPriority(e.target.value));
    };
    const onStatusChangeHandler = (e: any) => {
        dispatch(changeTaskStatus(e.target.value));
    };

    const createTaskHandler = async () => {
        console.log({
            title: taskName,
            description: taskDescription,
            priority: taskPriority,
            status: taskStatus,
            date: dayjs(dueDate).format('yyyy-mm-dd'),
        });

        try {
            const response = await createNewTask({
                title: taskName,
                description: taskDescription,
                priority: taskPriority,
                status: taskStatus,
                date: dayjs(dueDate).format('YYYY-MM-DD'),
            });
            console.log(response);

            if (response.status === 201) {
                setIsSuccess(true);
                dispatch(resetTaskForm({}));
                setTimeout(() => setIsSuccess(false), 4000);
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Box sx={{ width: '100%', margin: '20px', padding: '20px' }}>
            <form>
                <Stack spacing={2}>
                    <Typography variant="h6">Create A Task</Typography>
                    <TaskNameInputField dispatch={dispatch} data={taskName} />
                    <TaskDescription
                        dispatch={dispatch}
                        data={taskDescription}
                    />
                    <TaskDateField dispatch={dispatch} data={dueDate} />
                    <Stack spacing={2} direction="row">
                        <TaskSelectBox
                            labelName={'Status'}
                            selectedValue={taskStatus}
                            menuOptions={STATUS_OPTIONS}
                            onSelectHandler={onStatusChangeHandler}
                            id={'Status'}
                        />
                        <TaskSelectBox
                            labelName={'Priority'}
                            selectedValue={taskPriority}
                            menuOptions={PRIORITY_OPTIONS}
                            onSelectHandler={onPriorityChangeHandler}
                            id={'Priority'}
                        />
                    </Stack>

                    <Button
                        sx={{
                            color: '#FFFFFF',
                            background: 'rgb(103, 58, 183)',
                        }}
                        variant="contained"
                        onClick={() => createTaskHandler()}
                    >
                        Create Task
                    </Button>
                    {isSuccess && (
                        <Alert severity="success">
                            This is a success alert — check it out!
                        </Alert>
                    )}
                </Stack>
            </form>
        </Box>
    );
};

export default TaskForm;
