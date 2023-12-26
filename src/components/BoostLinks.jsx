import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Headings from "../ui/Headings";
import Button from "../ui/Button";

const StyledBoostLinks = styled(Flex)`
  gap: 2rem;
  grid-column: 1/4;
  background: url("bg-boost-mobile.svg") no-repeat top right
    var(--cl-dark-violet);
  background-size: contain;
  justify-content: center;
  padding: 10rem 2.5rem;

  @media (min-width: 1024px) {
    flex-direction: column;
    background: url("bg-boost-desktop.svg") no-repeat top center
      var(--cl-dark-violet);
    background-size: cover;
    padding: 5rem 2.5rem;
  }
`;

function BoostLinks() {
  return (
    <StyledBoostLinks>
      <Headings as="h2" $cl="white">
        Boost your links today
      </Headings>
      <Button type="round">Get started</Button>
    </StyledBoostLinks>
  );
}

export default BoostLinks;
