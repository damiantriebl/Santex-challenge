import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #FF5733; 
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: #C44521;

  &:focus {
    box-shadow: 0 0 0 3px rgba(255, 87, 51, 0.5); 
  }

  &:active {
    background-color: #892E15; 
    transform: translateY(2px);
  }
  &:disabled {
    background-color: #FFC3AF; 
    cursor: not-allowed;
  }
}
`;