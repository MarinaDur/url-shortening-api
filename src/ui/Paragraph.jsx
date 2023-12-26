import { styled, css } from "styled-components";

const Paragraph = styled.p`
  text-align: center;
  color: ${(props) =>
    props.$cl === "white"
      ? "var(--color-neutral-white)"
      : "var(--cl-grayish-violet)"};

  @media (min-width: 1024px) {
    text-align: left;
    color: var(--cl-grayish-violet);

    ${(props) =>
      props.$type === "hero" &&
      css`
        max-width: 40ch;
      `}

    ${(props) =>
      props.$type === "login" &&
      css`
        font-size: 1.6rem;
        font-weight: 700;

        @media (min-width: 1024px) {
          cursor: pointer;

          &:hover {
            color: var(--cl-very-dark-violet);
          }
        }
      `}
  }

  ${(props) =>
    props.type === "small" &&
    css`
      font-size: 1.6rem;

      @media (min-width: 1024px) {
        text-align: ${(props) => (props.$align === "left" ? "left" : "center")}
    `}

  ${(props) =>
    props.type === "url" &&
    css`
      text-align: left;
      font-size: clamp(1.7rem, 2vw, 1.9rem);
      color: ${(props) =>
        props.$color === "cyan"
          ? "var(--cl-cyan)"
          : "var(--cl-very-dark-violet)"};

      @media (max-width: 1023px) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      @media (min-width: 1024px) {
        color: ${(props) =>
          props.$color === "cyan"
            ? "var(--cl-cyan)"
            : "var(--cl-very-dark-violet)"};
      }
    `}

  ${(props) =>
    props.type === "error" &&
    css`
      text-align: left;
      font-size: 1.3rem;
      color: var(--cl-red);
      font-style: italic;

      @media (min-width: 1023px) {
        position: absolute;
        bottom: 3rem;
        left: 7rem;
        color: var(--cl-red);
      }
    `}
`;

export default Paragraph;
