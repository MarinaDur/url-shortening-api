import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useUrl } from "../context/UrlContext";
import Paragraph from "../ui/Paragraph";

const StyledSearchLinks = styled(Flex)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  background: url("bg-shorten-mobile.svg") no-repeat top right
    var(--cl-dark-violet);
  border-radius: 10px;
  padding: 2.2rem;
  gap: 1.5rem;
  width: 90%;

  @media (min-width: 1024px) {
    width: 97.5%;
    left: 0;
    transform: translate(0, 50%);
    padding: 6rem 7rem;
    background: url("bg-shorten-desktop.svg") no-repeat top right
      var(--cl-dark-violet);
    background-size: cover;
    max-width: 120rem;
    gap: 3rem;
  }
`;

function SearchLinks() {
  const { handleSearch, error } = useUrl();

  return (
    <StyledSearchLinks>
      <Input />
      {error && (
        <Paragraph type="error" $screenWidth="small">
          Please add a valid link *don't forget to include https://*
        </Paragraph>
      )}
      <Button screenWidth="big" type="box" handleClick={handleSearch}>
        Shorten it!
      </Button>
    </StyledSearchLinks>
  );
}

export default SearchLinks;
