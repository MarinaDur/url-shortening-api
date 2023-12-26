import { styled } from "styled-components";
import Headings from "../ui/Headings";
import Flex from "../ui/Flex";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";

const StyledHeroText = styled(Flex)`
  width: 100%;
  padding-right: 2.5rem;
  gap: 2rem;

  @media (min-width: 1024px) {
    align-items: flex-start;
    /* padding-left: clamp(2.5rem, 7vw, 12rem); */
    padding-right: 0;
    flex-direction: column;
  }
`;

function HeroText() {
  return (
    <StyledHeroText>
      <Headings as="h1" $align="left">
        More than just shorter links
      </Headings>
      <Paragraph $type="hero">
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </Paragraph>
      <Button type="round">Get Started</Button>
    </StyledHeroText>
  );
}

export default HeroText;
