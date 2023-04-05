import { configureStore } from '@reduxjs/toolkit';
import taskFormSlice from './features/task-form/taskFormSlice';
import taskListSlice from './features/task-list/taskListSlice';

export const store = configureStore({
    reducer: {
        taskFormValues: taskFormSlice,
        taskListValues: taskListSlice,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
