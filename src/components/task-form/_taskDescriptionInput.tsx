import { FC, ReactElement } from 'react';
import TextField from '@mui/material/TextField';
import { changeTaskDescription } from '../../features/task-form/taskFormSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
const TaskDescription: FC = (props:any): ReactElement => {
    const dispatch = useDispatch();
    const { taskDescription } = useSelector(
        (state: RootState) => state.taskFormValues,
    );

    return (
        <TextField
            id="taskDescription"
            label="Task Description"
            variant="outlined"
            placeholder="Task Description"
            multiline
            rows={5}
            size="small"
            value={taskDescription}
            onChange={(e)=>{
                dispatch(changeTaskDescription(e.target.value))

            }}
        />
    );
};

export default TaskDescription;
