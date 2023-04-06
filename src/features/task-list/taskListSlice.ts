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
    filterStatus: string;
};

const initialState: TaskDetailState = {
    tasks: [],
    taskStatus: {},
    filterStatus: '',
};

const updateTaskCountValues = () => {};

export const taskListSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        setTasksStatus: (state, action) => {
            state.taskStatus = action.payload;
        },

        addNewTask: (state, action) => {
            if (action.payload?.status?.toLowerCase() === 'todo') {
                state.taskStatus.todo = (
                    parseInt(state.taskStatus?.todo as string) + 1
                ).toString();
            } else if (action.payload?.status?.toLowerCase() === 'inprogress') {
                state.taskStatus.inProgress = (
                    parseInt(state.taskStatus?.inProgress as string) + 1
                ).toString();
            } else if (action.payload?.status?.toLowerCase() === 'Completed') {
                state.taskStatus.inProgress = (
                    parseInt(state.taskStatus?.completed as string) + 1
                ).toString();
            }

            state.tasks.unshift(action.payload);
        },

        updateTaskInfo: (state, action) => {
            const foundIndex: number = state.tasks.findIndex(
                (item) => item.id === action.payload.id,
            );
            if (foundIndex > -1) {
                if (action.payload?.status?.toLowerCase() === 'todo') {
                    state.taskStatus.todo = (
                        parseInt(state.taskStatus?.todo as string) + 1
                    ).toString();
                } else if (
                    action.payload?.status?.toLowerCase() === 'inprogress'
                ) {
                    state.taskStatus.inProgress = (
                        parseInt(state.taskStatus?.inProgress as string) + 1
                    ).toString();
                } else if (
                    action.payload?.status?.toLowerCase() === 'completed'
                ) {
                    state.taskStatus.inProgress = (
                        parseInt(state.taskStatus?.completed as string) + 1
                    ).toString();
                }

                if (state.tasks[foundIndex]?.status?.toLowerCase() === 'todo') {
                    state.taskStatus.todo = (
                        parseInt(state.taskStatus?.todo as string) - 1
                    ).toString();
                } else if (
                    state.tasks[foundIndex]?.status?.toLowerCase() ===
                    'inprogress'
                ) {
                    state.taskStatus.inProgress = (
                        parseInt(state.taskStatus?.inProgress as string) - 1
                    ).toString();
                }

                state.tasks[foundIndex] = action.payload;
            }
        },

        filterTasks: (state, action) => {
            state.filterStatus = action.payload;
        },
    },
});

export const {
    setTasks,
    setTasksStatus,
    addNewTask,
    updateTaskInfo,
    filterTasks,
} = taskListSlice.actions;
export default taskListSlice.reducer;
