import useStateWithStorage from './useStateWithStorage';
import { useQuery } from '@apollo/client';
import { GET_ACTIVE_ORDER_SUBTOTAL } from '../graphql/queries';
import { useEffect } from 'react';

interface ActiveOrderData {
  activeOrder: {
    total: string;
  };
}

export const useSubtotal = () => {
  const { loading, error, data } = useQuery<ActiveOrderData>(GET_ACTIVE_ORDER_SUBTOTAL);
  const [subtotal, setSubtotal] = useStateWithStorage<string>('subtotal', "0");

  useEffect(() => {
    if (data && data.activeOrder) {
      setSubtotal(data.activeOrder.total);
    }
  }, [data, setSubtotal]);

  return { loading, error, subtotal };
};
