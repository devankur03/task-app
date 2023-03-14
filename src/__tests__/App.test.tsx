import { describe, it, expect, afterEach } from 'vitest';
import configureStore from 'redux-mock-store'
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';

describe('App loading ', async () => {
    const mockStore = configureStore()
     // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState);

  const renderApp = () =>{
    return  render(<Provider store={store}><App/></Provider>)
  }
    afterEach(() => {
        cleanup();
    });

    it('Should render the page correctly', async () => {
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
