import { styled } from "styled-components";
import { useUrl } from "../context/UrlContext";

const StyledInput = styled.input`
  width: 100%;
  border-radius: 8px;
  padding: 1.5rem;
  font-size: 1.5rem;
  border: none;
  outline: ${(props) => (props.$error ? "2px solid var(--cl-red)" : "none")};

  &::placeholder {
    color: ${(props) =>
      props.$error ? "var(--cl-red)" : "var(--cl-grayish-violet)"};
  }

  @media (min-width: 1024px) {
    width: 75%;
    font-size: 2.3rem;
  }
`;

function Input() {
  const { handleValue, value, handleSubmit, error } = useUrl();
  return (
    <StyledInput
      type="text"
      placeholder="Shorten a link here..."
      value={value}
      onChange={handleValue}
      onKeyDown={handleSubmit}
      $error={error}
    />
  );
}

export default Input;
