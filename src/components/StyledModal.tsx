import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; 

  .modal-content {
    background: white;
    padding: 2em;
    border-radius: 5px;
    position: relative;
    width: 80%;

    .close-button {
      position: absolute;
      top: 0.5em;
      right: 0.5em;
      font-size: 1.5em;
      background: none;
      border: none;
    }
  }
  .variants-grid {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    flex-wrap: wrap;
    justify-content: space-between;
    }

    .variant {
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        gap: 0.5rem;
        border: 2px solid tomato;
        padding: 1rem;
        background-color: antiquewhite;

        img {
            max-width: 100%;
            height: auto;
        }
    }

    .close-button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        font-size: 1.5rem;
    }
    .product-image {
        width: 15rem;
        height: 15rem;
        object-fit: cover;
       
    }
    .element-description {
        display: flex;
        flex-direction: row;
        gap: 3rem;
    }
    .variant-price {
        align-self: center;
        font-size: larger;
        font-weight: 600;
    }
    .element-variant {
        display: flex;
        flex-direction: column;
        gap: 1rem; 
    }
`;
