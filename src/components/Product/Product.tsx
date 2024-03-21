import React, { useState } from 'react';
import { AssetInterface, VariantInterface } from "../ProductList/ProductList.schema";
import { StyledButton } from "../StyledButton";
import { StyledProduct } from "./StyledProduct";
import { Modal } from '../Modal/Modal';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_ITEM_TO_ORDER } from '../../graphql/mutations';
import { GET_ACTIVE_ORDER_SUBTOTAL } from '../../graphql/queries';
import { createPortal } from 'react-dom';

interface ProductProps {
    name: string,
    assets: AssetInterface[],
    variants: VariantInterface[],
    description: string,
    sale?: boolean
}

export const Product = ({
    name,
    assets,
    variants,
    sale,
    description,
}: ProductProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { refetch } = useQuery(GET_ACTIVE_ORDER_SUBTOTAL);

    const [addItemToOrder, { loading, error }] = useMutation(ADD_ITEM_TO_ORDER, {
        onCompleted: () => {
            refetch();
        }
    });

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const portalRoot = document.getElementById('portals');

    const handleBuyClick = (productVariantId: string, quantity: number) => {
        addItemToOrder({
            variables: {
                productVariantId,
                quantity: quantity || 1,
            },
        }).catch(e => {
            console.error('Error to add element', e);
        });
    };


    return (
        <>
            <StyledProduct
                sale={sale}
                isHovered={isHovered}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img className="product-image" src={assets?.[0].source} alt={name} />
                <div className="product-details">
                    <h3 className="product-name">{name}</h3>
                    <StyledButton className="product-details-button" onClick={openModal}>
                        Details
                    </StyledButton>
                </div>
            </StyledProduct>
            {isModalOpen && createPortal(
                <Modal onClose={closeModal}>
                    <div className="modal-content">
                        <div className='element-description'>
                            <section>
                                <h3>Description</h3>
                                <p>{description}</p>
                            </section>
                            <img className="product-image" src={assets[0].source} alt={name} />
                        </div>
                        <div className="variants-grid">
                            {variants.map(variant => (
                                <div className="variant" key={variant.id}>
                                    <div className='element-variant'>
                                        <span>{variant.name}</span>
                                        <span className='variant-price'>${variant.price}</span>
                                    </div>
                                    <StyledButton key={variant.id} onClick={() => { handleBuyClick(variant.id.toString(), 1) }}>
                                        {loading ? "Proccesing..." : <p>Buy</p>}
                                        {error && <p>An error occurred: {error.message}</p>}
                                    </StyledButton>
                                </div>
                            ))}
                        </div>
                    </div>
                </Modal>,
                portalRoot!
            )}
        </>
    )
}