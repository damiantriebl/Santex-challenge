import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { ProductList } from './ProductList';
import  {mocks}  from '../../mock';
import '@testing-library/jest-dom';


describe('Product List', () => {
    test('Show all product list', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <ProductList />
            </MockedProvider>
        );

            screen.debug();
            await waitForElementToBeRemoved(() => screen.getByText('Loading more products...'));

            expect(screen.getByText('Product 1')).toBeInTheDocument();
        

    });
});