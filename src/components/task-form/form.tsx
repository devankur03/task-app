import { FC, ReactElement } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TaskNameInputField from './_taskNameInput';
import TaskDescription from './_taskDescriptionInput';
import Typography from '@mui/material/Typography';
import TaskDateField from './_taskDateField';
import TaskSelectBox from './_taskSelect';
import { useDispatch } from 'react-redux';
import {
    changeTaskPriority,
    changeTaskStatus,
} from '../../features/task-form/taskFormSlice';
import { PRIORITY_OPTIONS, STATUS_OPTIONS } from '../../constants/staticData';

const TaskForm: FC = (): ReactElement => {
    const dispatch = useDispatch();

    const onPriorityChangeHandler = (e: any): void => {
        dispatch(changeTaskPriority(e.target.value));
    };
    const onStatusChangeHandler = (e: any) => {
        dispatch(changeTaskStatus(e.target.value));
    };

    return (
        <Box sx={{ width: '100%', margin: '20px', padding: '20px' }}>
            <form>
                <Stack spacing={2}>
                    <Typography variant="h6">Create A Task</Typography>
                    <TaskNameInputField dispatch={dispatch} />
                    <TaskDescription dispatch={dispatch} />
                    <TaskDateField dispatch={dispatch} />
                    <Stack spacing={2} direction="row">
                        <TaskSelectBox
                            labelName={'Status'}
                            selectedValue={''}
                            menuOptions={STATUS_OPTIONS}
                            onSelectHandler={onStatusChangeHandler}
                            id={'Status'}
                        />
                        <TaskSelectBox
                            labelName={'Priority'}
                            selectedValue={''}
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
                    >
                        Create Task
                    </Button>
                </Stack>
            </form>
        </Box>
    );
};

export default TaskForm;
