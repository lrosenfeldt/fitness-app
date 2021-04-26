import styled from 'styled-components';


const StyledButton = styled.button`
  padding: 1.5rem 2rem;
  margin: 1.5rem 2rem;
  background-color: '#AAAAAA';
  color: black;
  border: 1px solid red;
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