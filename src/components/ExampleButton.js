import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1.5rem 2rem;
`;

const ExampleButton = (a1, a2) => {
  const buttonHandler = (event) => {
    event.target.innerText = "Clicked!"
  }

  return (
    <StyledButton onClick={buttonHandler} isValid={true}>Ich bin ein Beispiel-Button!</StyledButton>
  );
}

export default ExampleButton;