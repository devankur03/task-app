import { FC, ReactElement } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ImenuOption, ItaskSelectProps } from './interfaces/ItaskSelectProps';

const TaskSelectBox: FC<ItaskSelectProps> = (
    props: ItaskSelectProps,
): ReactElement => {
    return (
        <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-helper-label">
                {props.labelName}
            </InputLabel>
            <Select
                labelId={`${props?.id}-label`}
                id={props?.id}
                value={props?.selectedValue || ''}
                label={props?.labelName}
                onChange={props?.onSelectHandler}
                size="small"
            >
                {props?.menuOptions.map((item: ImenuOption) => {
                    return <MenuItem value={item?.name}>{item.name}</MenuItem>;
                })}
            </Select>
        </FormControl>
    );
};
export default TaskSelectBox;
