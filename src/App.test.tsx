import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from './App';
import { mocks } from './mock';

describe('App Component', () => {
    it('renders Product List title', () => {
        render(<MockedProvider mocks={mocks} addTypename={false}>
            <App />
        </MockedProvider>);

        const titleElement = screen.getByText('Product List');
        expect(titleElement).toBeInTheDocument();
    });
});