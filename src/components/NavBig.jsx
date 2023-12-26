import { styled } from "styled-components";
import Flex from "../ui/Flex";
import NavLinks from "./NavLinks";

const StyledNavBig = styled(Flex)`
  flex-direction: row;
  list-style: none;
  gap: 4rem;

  @media (max-width: 1023px) {
    display: none;
  }
`;

function NavBig() {
  return (
    <StyledNavBig>
      <NavLinks />
    </StyledNavBig>
  );
}

export default NavBig;
