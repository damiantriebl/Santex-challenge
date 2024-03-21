import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Product } from './Product'; // Asegúrate de que la ruta de importación es correcta
import { ADD_ITEM_TO_ORDER } from '../../graphql/mutations'
import { GET_ACTIVE_ORDER_SUBTOTAL } from '../../graphql/queries'
import '@testing-library/jest-dom';

const mocks = [
    {
        request: {
            query: GET_ACTIVE_ORDER_SUBTOTAL,
        },
        result: {
            data: {
                activeOrder: {
                    subtotal: 100,
                },
            },
        },
    },
    {
        request: {
            query: ADD_ITEM_TO_ORDER,
            variables: { productVariantId: '6', quantity: 1 },
        },
        result: {
            data: {
                addItemToOrder: {
                    id: '1',
                    quantity: 1,
                    productVariant: {
                        id: '6',
                        name: 'Variant 1',
                        price: 10,
                    },
                },
            },
        },
    },
];

it('renders without crashing', async () => {
    const { getByText } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Product
                name="Test Product"
                description="This is a test product"
                assets={[{ source: 'https://example.com/image.jpg' }]}
                variants={[{ id: '6', name: 'Variant 1', price: 10 }]}
            />
        </MockedProvider>
    );

    await waitFor(() => {
        expect(getByText('Details')).toBeInTheDocument();
    });
});

