import { styled } from "styled-components";

const StyledImageHero = styled.div`
  width: 100%;
  height: 320px;
  background: url("illustration-working.svg") no-repeat left;
  background-size: cover;
  grid-column: 2/4;

  @media (min-width: 768px) {
    height: 500px;
  }

  @media (min-width: 768px) {
    background-position-x: 20px;
  }
`;

function ImageHero() {
  return <StyledImageHero />;
}

export default ImageHero;
