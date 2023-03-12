import { createSlice } from '@reduxjs/toolkit';

export interface taskForState {
    taskName: string;
    taskDescription: string;
    dueDate: Date;
    taskStatus: string;
    taskPriority: string;
}

const initialState: taskForState = {
    taskName: '',
    taskDescription: '',
    dueDate: new Date(),
    taskPriority: '',
    taskStatus: '',
};

export const taskFormSlice = createSlice({
    name: 'taskForm',
    initialState,
    reducers: {
        changeTaskName: (state,action) => {
            state.taskName += action.payload;
        },
        changeTaskDescription: (state,action) => {
            state.taskDescription += action.payload
        },
        changeDueDate: (state,action) => {
            state.dueDate = action.payload
        },
        changeTaskStatus: (state,action) => {
            state.taskStatus = action.payload
        },
        changeTaskPriority: (state,action) => {
            state.taskPriority = action.payload
        },
    },
});

export const {
    changeTaskName,
    changeDueDate,
    changeTaskDescription,
    changeTaskPriority,
    changeTaskStatus,
} = taskFormSlice.actions;
export default taskFormSlice.reducer;
