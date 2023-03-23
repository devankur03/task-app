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
        mockSelector.mockReturnValue({
            taskFormValues: {
                taskName: '',
                taskDescription: '',
                taskPriority: '',
                taskStatus: '',
                dueDate: '',
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
