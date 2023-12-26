import { styled } from "styled-components";

const StyledNavLinks = styled.li`
  color: var(--color-neutral-white);

  @media (min-width: 1024px) {
    color: var(--cl-grayish-violet);
    font-size: 1.6rem;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      color: var(--cl-very-dark-violet);
    }
  }
`;

function NavLinks() {
  return (
    <>
      <StyledNavLinks>Features</StyledNavLinks>
      <StyledNavLinks>Pricing</StyledNavLinks>
      <StyledNavLinks>Resources</StyledNavLinks>
    </>
  );
}

export default NavLinks;
