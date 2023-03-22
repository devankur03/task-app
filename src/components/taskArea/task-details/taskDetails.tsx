import { FC, ReactElement } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import dayjs from 'dayjs';

const TaskDetails: FC = (): ReactElement => {
    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={10}>
                            <Typography variant="h6" component="div">
                                Title Of the Task
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Chip
                                label={`${dayjs(new Date()).format(
                                    'D MMM, YYYY',
                                )}`}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>

                    <Typography sx={{ mt: 2.8 }} variant="body2">
                        well meaning and kindly. testing with e2e test and
                        custom user validation including user tracking and qubit
                        tracking & all test's should be perform in non-prod
                        enviourment
                    </Typography>

                    <Box display={'flex'} justifyContent="space-between" mt={3}>
                        <Switch
                            {...{ inputProps: { 'aria-label': 'Switch demo' } }}
                            defaultChecked
                        />
                        <Button variant="contained" size="medium">
                            Mark Complete
                        </Button>
                    </Box>
                </Container>
            </CardContent>
        </Card>
    );
};

export default TaskDetails;
