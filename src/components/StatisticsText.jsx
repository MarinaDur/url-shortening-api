import { styled } from "styled-components";
import Headings from "../ui/Headings";
import Paragraph from "../ui/Paragraph";
import Flex from "../ui/Flex";

const StyledStatisticsText = styled(Flex)`
  width: 100%;
  gap: 2rem;
  padding-inline: 2rem;
  margin-top: 12rem;
  margin-bottom: 9rem;
  @media (min-width: 1024px) {
    flex-direction: column;
    max-width: 500px;
    margin-top: 15rem;
  }
  @media (min-width: 1200px) {
    flex-direction: column;
    max-width: 600px;
    margin-top: 15rem;
  }
`;

function StaticticsText() {
  return (
    <StyledStatisticsText>
      <Headings as="h2">Advanced Statistics</Headings>
      <Paragraph type="small" $align="center">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </Paragraph>
    </StyledStatisticsText>
  );
}

export default StaticticsText;
