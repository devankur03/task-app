import { createSlice } from '@reduxjs/toolkit';

export interface TaskListDetails {
    title: string;
    description: string;
    date: Date;
    status: string;
    priority: string;
    id: string;
}

export type statusType = {
    todo?: string;
    inProgress?: string;
    completed?: string;
};

export type TaskDetailState = {
    tasks: Array<TaskListDetails>;
    taskStatus: statusType;
};

const initialState: TaskDetailState = {
    tasks: [],
    taskStatus: {},
};

export const taskListSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            console.log(action.payload, '==========>');
            state.tasks = action.payload;
        },
        setTasksStatus: (state, action) => {
            state.taskStatus = action.payload;
        },
    },
});

export const { setTasks, setTasksStatus } = taskListSlice.actions;
export default taskListSlice.reducer;
