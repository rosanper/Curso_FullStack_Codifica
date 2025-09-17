import styled from "styled-components"

const StyledButton = styled.button`
  background-color: ${({ isAdicionado }) => (isAdicionado ? "#ff4d4d" : "#4CAF50")};
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ isAdicionado }) => (isAdicionado ? "#e60000" : "#45a049")};
  }

  &:active {
    transform: scale(0.95);
  }
`


function Botao({ isAdicionado, toggleAdicionados, item }) {
  return (
    <StyledButton isAdicionado={isAdicionado} onClick={() => toggleAdicionados(item)}>
      {isAdicionado ? "Remover" : "Adicionar"}
    </StyledButton>
  )
}

export default Botao