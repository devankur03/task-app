import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import App from '../App';

describe('App loading ', async () => {
    afterEach(() => {
        cleanup();
    });

    it('Should render the page correctly', async () => {
        render(<App />);
        expect(screen.getByText(/Welcome/)).toBeInTheDocument();
        expect(
            screen.getByText(/This is your persnol Task Manager/),
        ).toBeInTheDocument();
    });

    it('Should reder the task form correctly', async () => {
        const { getByTestId, getByText } = render(<App />);
        expect(getByText(/Create A Task/)).toBeInTheDocument();
    });
});
