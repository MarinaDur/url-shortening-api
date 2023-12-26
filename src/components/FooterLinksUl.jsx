import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Headings from "../ui/Headings";

const StyledFooterLinksUl = styled(Flex)`
  gap: 0.5rem;
  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`;

const StyledCon = styled(Flex)`
  gap: 3rem;
  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

function FooterLinksUl({ title, children }) {
  return (
    <StyledCon>
      <Headings as="h4" $cl="white">
        {title}
      </Headings>
      <StyledFooterLinksUl as="ul">{children}</StyledFooterLinksUl>
    </StyledCon>
  );
}

export default FooterLinksUl;
