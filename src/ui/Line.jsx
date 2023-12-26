import { styled } from "styled-components";

const StyledLine = styled.div`
  width: 0.5rem;
  height: 8rem;
  background: var(--cl-cyan);

  @media (min-width: 1024px) {
    min-width: 2.5rem;
    height: 1rem;
    width: 10%;
  }
`;

function Line() {
  return <StyledLine />;
}

export default Line;
