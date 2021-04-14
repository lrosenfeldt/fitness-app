import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 3px dashed black;
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  padding: 1.5rem 2rem;
`;

const ExampleButton = () => {
  const buttonHandler = (event) => {
    event.target.innerText = "Clicked!"
  }

  return (
    <Button onClick={buttonHandler}>Ich bin ein Beispiel-Button!</Button>
  );
}

export default ExampleButton;