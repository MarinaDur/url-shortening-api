import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Logo from "../ui/Logo";
import FooterLinksCon from "./FooterLinksCon";
import SocialIcons from "./SocialIcons";

const StyledFooter = styled(Flex)`
  grid-column: 1/4;
  padding: 5rem 0;
  background: var(--cl-very-dark-violet);
  gap: 5rem;

  @media (min-width: 1024px) {
    align-items: flex-start;
    justify-content: space-between;
    grid-column: 2/3;
    border: none;
    padding: 5rem 0;
    /* border: solid 8px var(--cl-very-dark-violet); */
  }
`;

const GridCon = styled.div`
  @media (min-width: 1024px) {
    grid-column: ${(props) => (props.$side === "left" ? "1/2" : "3/4")};
    grid-row: 5/6;
    background: var(--cl-very-dark-violet);
    border: none;
    padding: 0;
    gap: 0;
    outline: 0;
    width: 100%;
    /* border: solid 10px var(--cl-very-dark-violet); */
  }
`;

function Footer() {
  return (
    <>
      <GridCon $side="left" />
      <StyledFooter>
        <Logo cl="white" />
        <FooterLinksCon />
        <SocialIcons />
      </StyledFooter>
      <GridCon $side="right" />
    </>
  );
}

export default Footer;
