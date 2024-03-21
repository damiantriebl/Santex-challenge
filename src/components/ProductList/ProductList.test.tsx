// ProductList.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { ProductList } from './ProductList';
import { GET_PRODUCTS_PAGINATED } from '../../graphql/queries';
import '@testing-library/jest-dom';



const mocks = [
    {
        request: {
            query: GET_PRODUCTS_PAGINATED,
            variables: { take: 10, skip: 0 },
        },
        result: {
            data: {
                products: {
                    totalItems: 10,
                    items: [
                        {
                            name: 'Product 1',
                            description: 'Description 1 product',
                            variants: [
                                { id: 1, name: 'Var 1', price: 10 },
                                { id: 2, name: 'Var 2', price: 15 },
                            ],
                            assets: [{ source: 'https://example.com/image1.jpg' }],
                        },
                        {
                            name: 'Product 2',
                            description: 'Description 2 product',
                            variants: [
                                { id: 1, name: 'Var 1', price: 10 },
                                { id: 2, name: 'Var 2', price: 15 },
                            ],
                            assets: [{ source: 'https://example.com/image1.jpg' }],
                        }, {
                            name: 'Product 3',
                            description: 'Description 3 product',
                            variants: [
                                { id: 1, name: 'Var 1', price: 10 },
                                { id: 2, name: 'Var 2', price: 15 },
                            ],
                            assets: [{ source: 'https://example.com/image1.jpg' }],
                        }, {
                            name: 'Product 4',
                            description: 'Description 4 product',
                            variants: [
                                { id: 1, name: 'Var 1', price: 10 },
                                { id: 2, name: 'Var 2', price: 15 },
                            ],
                            assets: [{ source: 'https://example.com/image1.jpg' }],
                        }, {
                            name: 'Product 5',
                            description: 'Description 5 product',
                            variants: [
                                { id: 1, name: 'Var 1', price: 10 },
                                { id: 2, name: 'Var 2', price: 15 },
                            ],
                            assets: [{ source: 'https://example.com/image1.jpg' }],
                        }, {
                            name: 'Product 6',
                            description: 'Description 6 product',
                            variants: [
                                { id: 1, name: 'Var 1', price: 10 },
                                { id: 2, name: 'Var 2', price: 15 },
                            ],
                            assets: [{ source: 'https://example.com/image1.jpg' }],
                        }, {
                            name: 'Product 7',
                            description: 'Description 7 product',
                            variants: [
                                { id: 1, name: 'Var 1', price: 10 },
                                { id: 2, name: 'Var 2', price: 15 },
                            ],
                            assets: [{ source: 'https://example.com/image1.jpg' }],
                        }, {
                            name: 'Product 8',
                            description: 'Description 8 product',
                            variants: [
                                { id: 1, name: 'Var 1', price: 10 },
                                { id: 2, name: 'Var 2', price: 15 },
                            ],
                            assets: [{ source: 'https://example.com/image1.jpg' }],
                        },
                        {
                            name: 'Product 9',
                            description: 'Description 9 product',
                            variants: [
                                { id: 1, name: 'Var 1', price: 10 },
                                { id: 2, name: 'Var 2', price: 15 },
                            ],
                            assets: [{ source: 'https://example.com/image1.jpg' }],
                        }, {
                            name: 'Product 10',
                            description: 'Description 10 product',
                            variants: [
                                { id: 1, name: 'Var 1', price: 10 },
                                { id: 2, name: 'Var 2', price: 15 },
                            ],
                            assets: [{ source: 'https://example.com/image1.jpg' }],
                        },
                    ],
                },
            },
        },
    },
];
beforeAll(() => {
    global.IntersectionObserver = class IntersectionObserver {
        constructor(public callback: IntersectionObserverCallback) { }

        observe(target: Element) {
            this.callback([{ isIntersecting: true, target }], this);
        }

        unobserve() {
            return null;
        }

        disconnect() {
            return null;
        }
    };
});

// Tus pruebas aquí

it('muestra la lista de productos correctamente', async () => {
    const { getByText } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <ProductList />
        </MockedProvider>
    );

    // Utiliza waitFor para manejar operaciones asíncronas
    await waitFor(() => {
        // Asegúrate de ajustar el texto esperado según tus datos mockeados
        expect(getByText('Product 1')).toBeInTheDocument();
    });
});
