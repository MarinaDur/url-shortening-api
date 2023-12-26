import { styled } from "styled-components";
import ImageHero from "../ui/ImageHero";
import HeroText from "./HeroText";
import Flex from "../ui/Flex";
import SearchLinks from "./SearchLinks";

const StyledHero = styled(Flex)`
  grid-column: 1/4;
  gap: 4rem;
  padding-bottom: 15rem;
  position: relative;
  padding-left: 2.5rem;

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    grid-column: 2/4;
    padding-left: 0;
  }
`;

function Hero() {
  return (
    <StyledHero>
      <ImageHero />
      <HeroText />
      <SearchLinks />
    </StyledHero>
  );
}

export default Hero;
