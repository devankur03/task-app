import { FC, ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { changeDueDate } from '../../features/task-form/taskFormSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

const TaskDateField: FC = (props: any): ReactElement => {
    const dispatch = useDispatch();
    const { dueDate } = useSelector(
        (state: RootState) => state.taskFormValues,
    );
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                className="dueDate"
                label="Due Date"
                defaultValue={null}
                //  value={props?.data || null}
                onChange={(newValue) => {
                    dispatch(changeDueDate(newValue));
                }}
            />
        </LocalizationProvider>
    );
};
export default TaskDateField;
