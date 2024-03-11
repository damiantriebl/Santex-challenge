import { gql } from "@apollo/client";

export const ADD_ITEM_TO_ORDER = gql`
mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
  addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
    ... on Order {
      id
      totalQuantity     
    }
    ... on OrderModificationError {
      errorCode
      message
    }
    ... on OrderLimitError {
      errorCode
      message
    }
    ... on NegativeQuantityError {
      errorCode
      message
    }
    ... on InsufficientStockError {
      errorCode
      message
      quantityAvailable
    }
  }
}
`;