import { gql } from "@apollo/client";

export const GET_PRODUCTS_PAGINATED = gql`
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
`;

export const GET_ACTIVE_ORDER_SUBTOTAL = gql`
  query GetActiveOrderSubtotal {
    activeOrder {
      total
    }
  }
`
