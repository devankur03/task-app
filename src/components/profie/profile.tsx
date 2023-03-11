import { FC, ReactElement } from 'react';
import { Box, Avatar, Typography } from '@mui/material';
const Profile: FC = (): ReactElement => {
    return (
        <Box
            display={'flex'}
            flexDirection="column"
            alignItems={'center'}
            color="#FFFFFF"
        >
            <Avatar
                sx={{
                    bgcolor: 'rgb(103, 58, 183)',
                    color: '#FFFFFF',
                    height: '65px',
                    width: '65px',
                }}
            >
                AN
            </Avatar>
            <Typography variant="h6">Welcome, Ankur</Typography>
            <Typography variant="body2">
                This is your persnol Task Manager
            </Typography>
        </Box>
    );
};
export default Profile;
