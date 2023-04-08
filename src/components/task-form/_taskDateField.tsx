import { FC, ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { changeDueDate } from '../../features/task-form/taskFormSlice';

const TaskDateField: FC = (props: any): ReactElement => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                className="dueDate"
                label="Due Date"
                defaultValue={null}
                //  value={props?.data || null}
                onChange={(newValue) => {
                    props.dispatch(changeDueDate(newValue));
                }}
            />
        </LocalizationProvider>
    );
};
export default TaskDateField;
