import { describe, it, expect, afterEach, vi, beforeEach } from 'vitest';
import configureStore from 'redux-mock-store';
import * as reactRedux from 'react-redux';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';

const mockDispatch = vi.fn();
const mockSelector = vi.fn();

vi.mock('react-redux', async (importOriginal) => {
    const mod: any = await importOriginal();
    return {
        ...mod,
        useDispatch: () => mockDispatch,
        useSelector: () => mockSelector,
    };
});

//

describe('App loading ', async () => {
    const mockStore = configureStore();
    // Initialize mockstore with empty state
    const initialState = {
        taskFormValues: {
            taskName: '',
            taskDescription: '',
            taskPriority: '',
            taskStatus: '',
            dueDate: '',
        },
        taskListValues: {
            tasks: [
                {
                    title: 'test-title',
                    description: 'test-description',
                    date: '2022-03-03',
                    status: 'todo',
                    priority: 'low',
                    id: '121323',
                },
            ],
            taskStatus: {
                todo: '1',
                inProgress: '1',
                completed: '1',
            },
        },
    };

    const store = mockStore(initialState);

    const renderApp = () => {
        return render(
            <Provider store={store}>
                <App />
            </Provider>,
        );
    };

    afterEach(() => {
        cleanup();
    });

    it('Should render the page correctly', async () => {
        const spy = vi.spyOn(reactRedux, 'useSelector');
        spy.mockReturnValue({
            taskFormValues: {
                taskName: '',
                taskDescription: '',
                taskPriority: '',
                taskStatus: '',
                dueDate: '',
            },

            tasks: [
                {
                    title: 'test-title',
                    description: 'test-description',
                    date: '2022-03-03',
                    status: 'todo',
                    priority: 'low',
                    id: '121323',
                },
            ],
            taskStatus: {
                todo: '1',
                inProgress: '1',
                completed: '1',
            },
        });
        renderApp();
        expect(screen.getByText(/Welcome/)).toBeInTheDocument();
        expect(
            screen.getByText(/This is your persnol Task Manager/),
        ).toBeInTheDocument();
    });

    it('Should reder the task form correctly', async () => {
        const { getByTestId, getByText } = renderApp();
        expect(getByText(/Create A Task/)).toBeInTheDocument();
    });
});
