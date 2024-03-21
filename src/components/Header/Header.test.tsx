import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './Header';
import * as useSubtotalHook from '../../hooks/useSubtotal';
import { ApolloError } from '@apollo/client';

describe('Header', () => {
    it('displays the subtotal when available', () => {
        const mockSubtotal = 100;
        jest.spyOn(useSubtotalHook, 'useSubtotal').mockReturnValue({
            loading: false,
            error: undefined,
            subtotal: mockSubtotal.toString(),
        });

        render(<Header />);
        expect(screen.getByText(`$ ${mockSubtotal}`)).toBeInTheDocument();
    });

    it('displays loading message when loading', () => {
        jest.spyOn(useSubtotalHook, 'useSubtotal').mockReturnValue({
            loading: true,
            error: undefined,
            subtotal: "",
        });

        render(<Header />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('displays error message when there is an error', () => {
        const mockError: ApolloError = {
            message: "Test error",
            name: "Error",
            graphQLErrors: [],
            clientErrors: [],
            networkError: null,
            extraInfo: undefined,
            protocolErrors: [],
        };
        jest.spyOn(useSubtotalHook, 'useSubtotal').mockReturnValue({
            loading: false,
            error: mockError,
            subtotal: "",
        });

        render(<Header />);
        expect(screen.getByText(`Error: ${mockError.message}`)).toBeInTheDocument();
    });

});
