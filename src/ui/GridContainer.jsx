import { styled } from "styled-components";

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: minmax(2.5rem, 1fr) minmax(20rem, 120rem) minmax(
      2.5rem,
      1fr
    );
  grid-template-rows: repeat(5, auto);

  @media (min-width: 1024px) {
    /* grid-template-columns: minmax(2.5rem, 10rem) minmax(0, 120rem) minmax(
        2.5rem,
        10rem
      ); */
    /* justify-content: space-between; */
  }
  /* grid-template-rows: repeat(6, min-content); */
  /* grid-template-areas:
    ". header ."
    ". hero image"
    ". statistics ."
    ". start ."
    ". footer ."; */
`;

export default GridContainer;
