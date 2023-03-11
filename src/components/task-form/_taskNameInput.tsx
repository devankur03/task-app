import { FC, ReactElement } from 'react';
import TextField from '@mui/material/TextField';

const TaskNameInputField: FC = (props: any): ReactElement => {
    return (
        <TextField
            id="taskName"
            label="Task Name"
            variant="outlined"
            placeholder="Task Name"
            size="small"
            data-testid="taskName"
        />
    );
};

export default TaskNameInputField;
