import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";
import { useUrl } from "../context/UrlContext";

const StyledShortenedUrl = styled(Flex)`
  background: var(--color-neutral-white);
  border-radius: 5px;
  justify-content: left;
  width: 100%;
  @media (min-width: 1024px) {
    justify-content: space-between;
    padding-inline: 2rem;
  }
`;

const StyledOriginalUrl = styled.div`
  padding: 1.5rem;
  border-bottom: solid 0.5px var(--cl-grayish-violet);
  width: 100%;

  @media (min-width: 1024px) {
    border: none;
  }
`;

const StyledNewUrl = styled(Flex)`
  padding: 1.5rem;
  gap: 1.5rem;
  width: 100%;
  align-items: flex-start;

  @media (min-width: 1024px) {
    align-items: center;
    justify-content: flex-end;
    width: min-content;
  }
`;

function ShortenedUrl({ url, isCopied }) {
  const { handleCopy } = useUrl();

  return (
    <StyledShortenedUrl>
      <StyledOriginalUrl>
        <Paragraph type="url">{url.longUrl}</Paragraph>
      </StyledOriginalUrl>
      <StyledNewUrl>
        <Paragraph $color="cyan" type="url" id={`textToCopy-${url.id}`}>
          {url.shortUrl}
        </Paragraph>
        <Button
          type="box"
          handleClick={() => handleCopy(url.id)}
          isCopied={isCopied}
          width="small"
        >
          {isCopied ? "Copied!" : "Copy"}
        </Button>
      </StyledNewUrl>
    </StyledShortenedUrl>
  );
}

export default ShortenedUrl;
