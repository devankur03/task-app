import { FC, ReactElement } from 'react';
import TextField from '@mui/material/TextField';
const TaskDescription: FC = (): ReactElement => {
    return (
        <TextField
            id="taskDescription"
            label="Task Description"
            variant="outlined"
            placeholder="Task Description"
            multiline
            rows={5}
            size="small"
        />
    );
};

export default TaskDescription;
