import { styled, css } from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 3rem;
  background: var(--cl-cyan);
  color: var(--color-neutral-white);
  font-size: 2rem;
  border: none;
  letter-spacing: 0.5px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background: var(--cl-cyan-hover);
  }

  ${(props) =>
    props.type === "round" &&
    css`
      border-radius: 40px;
      font-size: 2rem;
    `}

  ${(props) =>
    props.type === "roundWidth" &&
    css`
      border-radius: 40px;
      font-size: 1.8rem;
      width: 100%;

      @media (min-width: 1024px) {
        width: 108px;
        font-size: 1.6rem;
        padding: 1rem 2rem;
      }
    `}

  ${(props) =>
    props.type === "box" &&
    css`
      border-radius: 8px;
      width: 100%;
      font-size: 1.8rem;
      background: ${(props) =>
        props.$isCopied ? "var(--cl-dark-violet)" : "var(--cl-cyan)"};

      @media (min-width: 1024px) {
        width: ${(props) => (props.$width === "small" ? "130px" : "100%")};
        font-size: ${(props) => props.$width === "small" && "1.6rem"};
      }

      &:hover {
        background: ${(props) =>
          props.$isCopied ? "var(--cl-dark-violet)" : "var(--cl-cyan-hover)"};
      }
    `}

    @media (min-width: 1024px) {
    ${(props) =>
      props.$screenWidth === "big" &&
      css`
        width: 25%;
        padding: 1.5rem 3rem;
        font-size: 2.3rem;
      `}
  }
`;

function Button({ type, children, handleClick, isCopied, screenWidth, width }) {
  return (
    <StyledButton
      onClick={handleClick}
      type={type}
      $isCopied={isCopied}
      $screenWidth={screenWidth}
      $width={width}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
