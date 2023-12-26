import { styled, css } from "styled-components";
import Flex from "../ui/Flex";
import Headings from "../ui/Headings";
import Paragraph from "../ui/Paragraph";

const StyledStatisticsComp = styled(Flex)`
  gap: 2rem;
  padding: 8rem 2rem 3rem;
  background: var(--color-neutral-white);
  position: relative;
  border-radius: 5px;

  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    /* max-width: 330px; */
    padding: 8rem 3rem 3rem;

    ${(props) =>
      props.$place === "top" &&
      css`
        /* margin-top: 0.5rem; */
        align-self: flex-start;
      `}
    ${(props) =>
      props.$place === "middle" &&
      css`
        align-self: center;

        /* margin-top: 10rem; */
      `}

    ${(props) =>
      props.$place === "bottom" &&
      css`
        align-self: flex-end;

        /* margin-top: 20rem; */
      `}
  }
`;

const StyledIconCon = styled(Flex)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  height: 80px;
  width: 80px;
  justify-content: center;
  background: var(--cl-dark-violet);

  @media (min-width: 1024px) {
    left: 3rem;
    transform: translate(0, -50%);
  }
`;

const StyledIcon = styled.img`
  width: 50%;
`;

function StatisticsComp({ src, title, desc, place }) {
  return (
    <StyledStatisticsComp $place={place}>
      <StyledIconCon>
        <StyledIcon src={src} alt="icon" />
      </StyledIconCon>
      <Headings as="h3" $align="left">
        {title}
      </Headings>
      <Paragraph type="small" $align="left">
        {desc}
      </Paragraph>
    </StyledStatisticsComp>
  );
}

export default StatisticsComp;
