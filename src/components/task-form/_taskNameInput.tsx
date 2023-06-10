import { FC, ReactElement } from 'react';
import TextField from '@mui/material/TextField';
import { changeTaskName } from '../../features/task-form/taskFormSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

const TaskNameInputField: FC = (props: any): ReactElement => {
    console.log(props);
    const dispatch = useDispatch();
    const { taskName } = useSelector(
        (state: RootState) => state.taskFormValues,
    );

    return (
        <TextField
            id="taskName"
            label="Task Name"
            variant="outlined"
            placeholder="Task Name"
            size="small"
            data-testid="taskName"
            value={taskName}
            onChange={(e) => {
                dispatch(changeTaskName(e.target.value));
            }}
        />
    );
};

export default TaskNameInputField;
