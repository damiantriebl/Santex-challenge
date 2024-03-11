import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { ProductList } from './ProductList';
import { mocks } from '../mock';


describe('Product List', () => {
    test('muestra la lista de productos con los datos correctos', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <ProductList />
            </MockedProvider>
        );

        // Espera a que los elementos esperados aparezcan en el documento
        await waitFor(() => {
            screen.debug();
            expect(screen.getByText('Product 1')).toBeInTheDocument();
        }, { timeout: 5000 }); // Ajusta el timeout según sea necesario para tu test

        // Otros asserts según sea necesario
    });
});