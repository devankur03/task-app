import { FC, ReactElement } from 'react';
import TextField from '@mui/material/TextField';
import { changeTaskName } from '../../features/task-form/taskFormSlice';

const TaskNameInputField: FC = (props: any): ReactElement => {
    console.log(props)
    return (
        <TextField
            id="taskName"
            label="Task Name"
            variant="outlined"
            placeholder="Task Name"
            size="small"
            data-testid="taskName"
            value={props?.data}
            onChange={(e)=>{
                console.log(e.target.value)
                props.dispatch(changeTaskName(e.target.value))
            }}
        />
    );
};

export default TaskNameInputField;
