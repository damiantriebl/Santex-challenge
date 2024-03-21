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
interface MockIntersectionObserverEntry extends IntersectionObserverEntry {
    target: Element;
    isIntersecting: boolean;
    boundingClientRect: DOMRectReadOnly;
    intersectionRatio: number;
    intersectionRect: DOMRectReadOnly;
    rootBounds: DOMRectReadOnly | null;
    time: number;
}

const mockIntersectionObserver = class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | null = null;
    readonly rootMargin: string = '';
    readonly thresholds: ReadonlyArray<number> = [];
    private callback: IntersectionObserverCallback;

    constructor(callback: IntersectionObserverCallback) {
        this.callback = callback;
    }

    observe(target: Element): void {
        const entry: MockIntersectionObserverEntry = {
            isIntersecting: true,
            target,
            boundingClientRect: target.getBoundingClientRect() as DOMRectReadOnly,
            intersectionRatio: 1,
            intersectionRect: target.getBoundingClientRect() as DOMRectReadOnly,
            rootBounds: target.getBoundingClientRect() as DOMRectReadOnly,
            time: Date.now()
        };
        this.callback([entry], this);
    }

    unobserve(): void {
    }

    disconnect(): void {
    }

    takeRecords(): IntersectionObserverEntry[] {
        return [];
    }
};

beforeAll(() => {
    global.IntersectionObserver = mockIntersectionObserver as typeof IntersectionObserver;
});

it('muestra la lista de productos correctamente', async () => {
    const { getByText } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <ProductList />
        </MockedProvider>
    );

    await waitFor(() => {
        expect(getByText('Product 1')).toBeInTheDocument();
    });
});
