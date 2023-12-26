import { styled } from "styled-components";
import StatisticsComp from "./StatisticsComp";
import Line from "../ui/Line";
import Flex from "../ui/Flex";

const StyledStatisticsCompContainer = styled(Flex)`
  @media (min-width: 1024px) {
    min-height: 380px;
  }
`;

function StatisticsCompContainer() {
  return (
    <StyledStatisticsCompContainer>
      <StatisticsComp
        place="top"
        src="icon-brand-recognition.svg"
        title="Brand Recognition"
        desc="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
      />
      <Line />
      <StatisticsComp
        place="middle"
        src="icon-detailed-records.svg"
        title="Detailed Records"
        desc="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
      />
      <Line />
      <StatisticsComp
        place="bottom"
        src="icon-fully-customizable.svg"
        title="Fully Customizable"
        desc="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
      />
    </StyledStatisticsCompContainer>
  );
}

export default StatisticsCompContainer;
