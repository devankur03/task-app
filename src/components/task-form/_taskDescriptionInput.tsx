import { FC, ReactElement } from 'react';
import TextField from '@mui/material/TextField';
import { changeTaskDescription } from '../../features/task-form/taskFormSlice';
const TaskDescription: FC = (props:any): ReactElement => {
    return (
        <TextField
            id="taskDescription"
            label="Task Description"
            variant="outlined"
            placeholder="Task Description"
            multiline
            rows={5}
            size="small"
            onBlur={(e)=>{
                props.dispatch(changeTaskDescription(e.target.value))

            }}
        />
    );
};

export default TaskDescription;
