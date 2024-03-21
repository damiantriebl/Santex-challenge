import React from 'react';

import { useQuery, } from '@apollo/client';
import { GET_PRODUCTS_PAGINATED } from '../../graphql/queries';
import { StyledProductList } from './StyledProductList';
import { GetProductsPaginatedQueryResponse, GetProductsPaginatedVariables, ProductInterface } from './ProductList.schema';
import { Product } from '../Product/Product';
import { useEffect, useState, } from 'react';

export function ProductList() {
  const ELEMENTS_COUNT = 10;

  const [products, setProducts] = useState<ProductInterface[] | []>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const { loading, error, data, fetchMore } = useQuery<GetProductsPaginatedQueryResponse, GetProductsPaginatedVariables>(GET_PRODUCTS_PAGINATED, {
    variables: { take: ELEMENTS_COUNT, skip: 0 },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (data && data.products.items.length > 0) {
      setProducts(prevProducts => [...prevProducts, ...data.products.items]);
    }
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore && !isFetchingMore) {
        fetchMore({
          variables: {
            skip: products.length,
            take: ELEMENTS_COUNT,
          },
        }).then(response => {
          setProducts(prevProducts => [...prevProducts, ...response.data.products.items]);
          setHasMore(products.length + response.data.products.items.length < response.data.products.totalItems);
          setIsFetchingMore(false);
        }).catch(error => {
          console.error('Error al cargar más productos', error);
          setIsFetchingMore(false);
        })
      }
    }, {
      rootMargin: '20px',
      threshold: 1.0
    });

    if (products.length) {
      const lastProductElement = document.querySelector('[data-last-product]');
      if (lastProductElement) {
        observer.observe(lastProductElement);
      }
    }

    return () => observer.disconnect();
  }, [products, hasMore, loading, fetchMore, isFetchingMore]);


  if (error) return <p>Error: {error.message}</p>;
  return (
    <StyledProductList>
      {products?.map((product, idx) => {
        const isLastProduct = products.length === idx + 1;
        if (product.assets.length > 0) {
          return (
            <div
              key={idx}
              data-last-product={isLastProduct ? "true" : undefined}
            >
              <Product key={idx}
                name={product.name}
                assets={product.assets}
                description={product.description}
                variants={product.variants}
              />
            </div>
          );
        }
      })}
      {(loading || isFetchingMore) && hasMore && <p>Loading more products...</p>}
    </StyledProductList>
  );
}
