import { styled } from "styled-components";

const StyledFooterLinksLi = styled.li`
  text-align: center;
  color: var(--cl-gray);
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: var(--cl-cyan);
  }
`;

function FooterLinksLi({ children }) {
  return <StyledFooterLinksLi>{children}</StyledFooterLinksLi>;
}

export default FooterLinksLi;
