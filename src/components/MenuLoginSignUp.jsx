import { styled, css } from "styled-components";
import Flex from "../ui/Flex";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";

const StyledMenuLoginSignUp = styled(Flex)`
  width: 100%;
  gap: 2rem;

  ${(props) =>
    props.$screenWidth &&
    css`
      @media (max-width: 1023px) {
        display: none;
      }
    `}

  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
`;

function MenuLoginSignUp({ screenWidth }) {
  return (
    <StyledMenuLoginSignUp $screenWidth={screenWidth}>
      <Paragraph $type="login" $cl="white">
        Login
      </Paragraph>
      <Button type="roundWidth">Sign Up</Button>
    </StyledMenuLoginSignUp>
  );
}

export default MenuLoginSignUp;
