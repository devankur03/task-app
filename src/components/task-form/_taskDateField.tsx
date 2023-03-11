import { FC, ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const TaskDateField: FC = (): ReactElement => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Due Date"
                // value={value}
                // onChange={(newValue) => setValue(newValue)}
            />
        </LocalizationProvider>
    );
};
export default TaskDateField;
