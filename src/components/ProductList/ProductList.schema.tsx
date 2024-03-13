export interface VariantInterface {
  id: string;
  name: string;
  price: number;
}

export interface AssetInterface {
  source: string;
}

export interface ProductInterface {
  id: string;
  name: string;
  description: string;
  variants: VariantInterface[];
  assets: AssetInterface[];
}

interface ProductsPaginatedResponse {
  totalItems: number;
  items: ProductInterface[];
}

export interface GetProductsPaginatedVariables {
  take: number;
  skip: number;
}

export interface GetProductsPaginatedQueryResponse {
  products: ProductsPaginatedResponse;
}

export interface GetProductsPaginatedQueryVariables {
  variables: GetProductsPaginatedVariables;
}