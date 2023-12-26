import { styled } from "styled-components";
import Flex from "../ui/Flex";
import StaticticsText from "./StatisticsText";
import StatisticsCompContainer from "./StatisticsCompContainer";
import { useUrl } from "../context/UrlContext";
import ShortenedUrlCon from "./ShortenedUrlCon";

const StyledStatistics = styled(Flex)`
  grid-column: 1/4;
  background: var(--cl-grayish-violet-light);
  /* padding: 15rem 2.5rem 7rem; */
  padding: 2rem 2.5rem 7rem;
  /* gap: 9rem; */
  @media (min-width: 1024px) {
    flex-direction: column;
    /* gap: 8rem; */
    grid-column: 2/3;
    padding: 2rem 0rem 7rem;
  }
`;

const GridCon = styled.div`
  @media (min-width: 1024px) {
    grid-column: ${(props) => (props.$side === "left" ? "1/2" : "3/4")};
    grid-row: 3/4;
    background: var(--cl-grayish-violet-light);
  }
`;

function Statistics() {
  const { searchResults } = useUrl();
  return (
    <>
      <GridCon $side="left" />
      <StyledStatistics>
        {searchResults.length > 0 && <ShortenedUrlCon />}
        <StaticticsText />
        <StatisticsCompContainer />
      </StyledStatistics>
      <GridCon $side="right" />
    </>
  );
}

export default Statistics;
