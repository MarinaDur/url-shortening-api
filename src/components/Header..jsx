import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Logo from "../ui/Logo";
import Menu from "../ui/Menu";
import NavSmall from "./NavSmall";
import { useUrl } from "../context/UrlContext";
import NavBig from "./NavBig";
import MenuLoginSignUp from "./MenuLoginSignUp";

const StyledHeader = styled(Flex)`
  grid-column: 2/2;
  padding-top: 4rem;
  justify-content: space-between;
  margin-bottom: 4rem;
  position: relative;
  flex-direction: row;
  @media (min-width: 1024px) {
  }
`;

const StyledLogoNavCon = styled(Flex)`
  flex-direction: row;
  gap: 5rem;
`;

function Header() {
  const { handleMenuToggle } = useUrl();
  return (
    <StyledHeader as="header">
      <StyledLogoNavCon>
        <Logo />
        <NavBig />
      </StyledLogoNavCon>
      <Menu handleMenu={handleMenuToggle} />
      <NavSmall />
      <MenuLoginSignUp screenWidth="1024" />
    </StyledHeader>
  );
}

export default Header;
