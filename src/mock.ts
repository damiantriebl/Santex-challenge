import { ADD_ITEM_TO_ORDER } from "./graphql/mutations";
import { GET_ACTIVE_ORDER_SUBTOTAL, GET_PRODUCTS_PAGINATED } from "./graphql/queries";

export const mocks = [
   
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
                            id: '1',
                            name: 'Product 1',
                            description: 'Description 1',
                            variants: [{ id: 'var1', name: 'Variant 1', price: 100 }],
                            assets: [{ source: 'https://example.com/product1.jpg' }],
                        },
                        {
                            id: '2',
                            name: 'Product 2',
                            description: 'Description 2',
                            variants: [{ id: 'var2', name: 'Variant 2', price: 150 }],
                            assets: [{ source: 'https://example.com/product2.jpg' }],
                        },
                        {
                            id: '3',
                            name: 'Product 3',
                            description: 'Description 3',
                            variants: [{ id: 'var1', name: 'Variant 3', price: 100 }],
                            assets: [{ source: 'https://example.com/product1.jpg' }],
                        },
                        {
                            id: '4',
                            name: 'Product 4',
                            description: 'Description 4',
                            variants: [{ id: 'var2', name: 'Variant 4', price: 150 }],
                            assets: [{ source: 'https://example.com/product2.jpg' }],
                        },
                        {
                            id: '5',
                            name: 'Product 5',
                            description: 'Description 5',
                            variants: [{ id: 'var1', name: 'Variant 5', price: 100 }],
                            assets: [{ source: 'https://example.com/product1.jpg' }],
                        },
                        {
                            id: '6',
                            name: 'Product 6',
                            description: 'Description 6',
                            variants: [{ id: 'var2', name: 'Variant 6', price: 150 }],
                            assets: [{ source: 'https://example.com/product2.jpg' }],
                        },
                        {
                            id: '7',
                            name: 'Product 7',
                            description: 'Description 7',
                            variants: [{ id: 'var1', name: 'Variant 7', price: 100 }],
                            assets: [{ source: 'https://example.com/product1.jpg' }],
                        },
                        {
                            id: '8',
                            name: 'Product 8',
                            description: 'Description 8',
                            variants: [{ id: 'var2', name: 'Variant 8', price: 150 }],
                            assets: [{ source: 'https://example.com/product2.jpg' }],
                        },
                        {
                            id: '9',
                            name: 'Product 9',
                            description: 'Description 9',
                            variants: [{ id: 'var1', name: 'Variant 9', price: 100 }],
                            assets: [{ source: 'https://example.com/product1.jpg' }],
                        },
                        {
                            id: '10',
                            name: 'Product 10',
                            description: 'Description 10',
                            variants: [{ id: 'var2', name: 'Variant 10', price: 150 }],
                            assets: [{ source: 'https://example.com/product2.jpg' }],
                        },
                    ],
                    __typename: 'Products'

                },
            },
        },
    },
    {
        request: {
          query: ADD_ITEM_TO_ORDER,
          variables: { productVariantId: "3", quantity: 1 },
        },
        result: {
          data: {
            addItemToOrder: {
              __typename: "Order",
              id: "3",
              totalQuantity: 5,
            },
          },
        },
      },
    {
        request: {
            query: GET_ACTIVE_ORDER_SUBTOTAL,
        },
        result: {
            data: {
                activeOrder: {
                    total: 100,
                },
            },
        },
    },
];
