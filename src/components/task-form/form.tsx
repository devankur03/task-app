import { FC, ReactElement } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TaskNameInputField from './_taskNameInput';
import TaskDescription from './_taskDescriptionInput';
import Typography from '@mui/material/Typography';
import TaskDateField from './_taskDateField';
import TaskSelectBox from './_taskSelect';

const TaskForm: FC = (): ReactElement => {
    const handleSelectChange = (e: any): void => {
        console.log(e);
    };

    return (
        <Box sx={{ width: '100%', margin: '20px', padding: '20px' }}>
            <form>
                <Stack spacing={2}>
                    <Typography variant="h6">Create A Task</Typography>
                    <TaskNameInputField />
                    <TaskDescription />
                    <TaskDateField />
                    <Stack spacing={2} direction="row">
                        <TaskSelectBox
                            labelName={'Status'}
                            selectedValue={''}
                            menuOptions={[
                                { id: 'InProgress', name: 'In Progress' },
                                { id: 'Complete', name: 'Complete' },
                            ]}
                            onSelectHandler={handleSelectChange}
                            id={'Status'}
                        />
                        <TaskSelectBox
                            labelName={'Priority'}
                            selectedValue={''}
                            menuOptions={[
                                { id: 'low', name: 'Low' },
                                { id: 'High', name: 'High' },
                                { id: 'Medium', name: 'Medium' },
                            ]}
                            onSelectHandler={handleSelectChange}
                            id={'Priority'}
                        />
                    </Stack>

                    <Button
                        sx={{
                            color: '#FFFFFF',
                            background: 'rgb(103, 58, 183)',
                        }}
                        variant="contained"
                    >
                        Create Task
                    </Button>
                </Stack>
            </form>
        </Box>
    );
};

export default TaskForm;
