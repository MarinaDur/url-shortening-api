import { styled } from "styled-components";
import Flex from "../ui/Flex";
import NavLinks from "./NavLinks";
import MenuLoginSignUp from "./MenuLoginSignUp";
import { useUrl } from "../context/UrlContext";

const StyledNavSmall = styled(Flex)`
  background: var(--cl-dark-violet);
  position: absolute;
  top: 0;
  transform: translateY(100px);
  width: 100%;
  z-index: 9999;
  padding: ${(props) => (props.$isOpen ? "4rem 2rem" : "0")};
  /* padding: 4rem 2rem; */
  border-radius: 10px;
  flex-direction: column;
  gap: 2.5rem;
  height: ${(props) => (props.$isOpen ? "346px" : "0")};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;

const StyledNavSmallUl = styled(Flex)`
  gap: 2rem;
  justify-content: center;
  border-bottom: solid 1px var(--cl-grayish-violet);
  width: 100%;
  padding-bottom: 2.5rem;
`;

function NavSmall() {
  const { isMenuOpen } = useUrl();
  return (
    <StyledNavSmall as="nav" $isOpen={isMenuOpen}>
      <StyledNavSmallUl as="ul">
        <NavLinks />
      </StyledNavSmallUl>
      <MenuLoginSignUp />
    </StyledNavSmall>
  );
}

export default NavSmall;
