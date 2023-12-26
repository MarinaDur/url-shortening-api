import { styled } from "styled-components";
import GridContainer from "../ui/GridContainer";
import Header from "./Header.";
import Hero from "./Hero";
import Statistics from "./Statistics";
import BoostLinks from "./BoostLinks";
import Footer from "./Footer";

const StyledMain = styled.div``;

function Main() {
  return (
    <StyledMain>
      <GridContainer>
        <Header />
        <Hero />
        <Statistics />
        <BoostLinks />
        <Footer />
      </GridContainer>
    </StyledMain>
  );
}

export default Main;
