import { gql } from "@apollo/client";

export const GET_PRODUCTS_PAGINATED_MOCK = {
    request: {
        query: gql`
        query GetProductsPaginated($take: Int!, $skip: Int!) {
            products(options: { take: $take, skip: $skip }) {
                totalItems
                items {
                    name
                    description
                    variants {
                    id
                    name
                    price
                }
                assets {
                    source
                    }
                }
        }
      }
    `
    },
    result: {
        data: {
            products: {
                totalItems: 1,
                items: [
                    {
                        name: 'Product 1',
                        description: 'Description 1',
                        variants: [{ id: 'var1', name: 'Variant 1', price: 100 }],
                        assets: [{ source: 'https://example.com/product1.jpg' }],
                    },
                ],
            },
        },
    },
};