import { styled } from "styled-components";

const StyledMenu = styled.svg`
  @media (min-width: 1024px) {
    display: none;
  }
`;

const StyledPath = styled.path`
  width: 30;
  height: 15;
`;

const StyledG = styled.g`
  fill: var(--cl-gray-menu);
`;

function Menu({ handleMenu }) {
  return (
    <StyledMenu
      width="22"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      onClick={handleMenu}
    >
      <StyledG fill="#FFF" fillRule="evenodd">
        <StyledPath d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"></StyledPath>
      </StyledG>
    </StyledMenu>
  );
}

export default Menu;
