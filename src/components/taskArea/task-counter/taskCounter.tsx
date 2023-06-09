import { Avatar, Box, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { FC, ReactElement } from 'react';
import { StatusColor } from '../enum/status';
import { ItaskCounter } from '../interfaces/ItaskCounter';

//StatusColor
const TaskCounter: FC<ItaskCounter> = (props): ReactElement => {
    const { status, count, onClickHandler, isActive } = props;
    return (
        <Box className={`status-${status}`}>
            <Avatar
                sx={{
                    background: isActive ? StatusColor[status] : 'transparent',
                    color: '#fff',
                    border: `5px solid ${StatusColor[status]}`,
                    height: 100,
                    width: 100,
                }}
                onClick={() => {
                    onClickHandler(status);
                }}
            >
                {count}
            </Avatar>
            <Typography
                alignContent={'center'}
                align={'center'}
                mt={2}
                textTransform={'capitalize'}
            >
                {status}
            </Typography>
        </Box>
    );
};

export default TaskCounter;
