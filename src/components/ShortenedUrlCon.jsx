import { styled } from "styled-components";
import Flex from "../ui/Flex";
import { useUrl } from "../context/UrlContext";
import ShortenedUrl from "./ShortenedUrl";

const StyledShortenedUrlCon = styled(Flex)`
  gap: 2rem;
  margin-top: 8rem;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: column;
    margin-top: 10rem;
  }
`;

function ShortenedUrlCon() {
  const { searchResults, isCopied } = useUrl();

  return (
    <StyledShortenedUrlCon>
      {searchResults.length > 0 &&
        searchResults.map((url, index) => (
          <ShortenedUrl key={index} url={url} isCopied={isCopied === index} />
        ))}
    </StyledShortenedUrlCon>
  );
}

export default ShortenedUrlCon;
