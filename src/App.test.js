// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ViewDrift title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ViewDrift/i);
    expect(titleElement).toBeInTheDocument();
});
