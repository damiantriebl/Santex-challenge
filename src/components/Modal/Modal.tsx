import React from 'react';
import { StyledModal } from './StyledModal';

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal = ({ onClose, children }: ModalProps) => {

    return (
        <StyledModal>
            <div className="modal-content">
                <button className='close-button' onClick={onClose}>&times;</button>
                {children}
            </div>
        </StyledModal>
    );
};