import { styled } from "styled-components";
import Flex from "../ui/Flex";
import FooterLinksUl from "./FooterLinksUl";
import FooterLinksLi from "./FooterLinksLi";

const StyledFooterLinksCon = styled(Flex)`
  gap: 3rem;

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

function FooterLinksCon() {
  return (
    <StyledFooterLinksCon>
      <FooterLinksUl title="Features">
        <FooterLinksLi>Link Shortening</FooterLinksLi>
        <FooterLinksLi>Branded Links</FooterLinksLi>
        <FooterLinksLi>Analytics</FooterLinksLi>
      </FooterLinksUl>
      <FooterLinksUl title="Resources">
        <FooterLinksLi>Blog</FooterLinksLi>
        <FooterLinksLi>Developers</FooterLinksLi>
        <FooterLinksLi>Support</FooterLinksLi>
      </FooterLinksUl>
      <FooterLinksUl title="Company">
        <FooterLinksLi>About</FooterLinksLi>
        <FooterLinksLi>Our Team</FooterLinksLi>
        <FooterLinksLi>Careers</FooterLinksLi>
        <FooterLinksLi>Contact</FooterLinksLi>
      </FooterLinksUl>
    </StyledFooterLinksCon>
  );
}

export default FooterLinksCon;
