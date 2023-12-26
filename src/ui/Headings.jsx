import { styled, css } from "styled-components";

const Headings = styled.h1`
  color: ${(props) =>
    props.$cl === "white"
      ? "var(--color-neutral-white)"
      : "var(--cl-very-dark-violet)"};
  text-align: center;

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: clamp(4rem, 5vw, 8rem);

      @media (min-width: 1024px) {
        text-align: ${(props) => (props.$align === "left" ? "left" : "center")};
      }
    `};

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: clamp(2.5rem, 3vw, 5rem);
    `};

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;

      @media (min-width: 1024px) {
        text-align: ${(props) => (props.$align === "left" ? "left" : "center")};
      }
    `};

  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.7rem;
      font-weight: 700;
    `};
`;

export default Headings;
