import styled from "styled-components";

export const StyledProduct = styled.div<{ sale?: boolean }>`
  color: black;
  font-size: 1em;
  background: ${props => props.sale ? "#E0E7FF" : "white"};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  
  &:hover {
    transform: scale(1.05); 
    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
    background: tomato;
  }
  
  .product-image {
    width: 22rem;
    height: 22rem;
    object-fit: cover;
  }
  .element-description {
    padding: 1rem;
   }
  .product-details {
    padding: 1rem;
    text-align: center;
    width: 100%;
  }
  .modal-content {
    background: white;
    padding: 2em;
    border-radius: 5px;
    position: relative;
  }
`;