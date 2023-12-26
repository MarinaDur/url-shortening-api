import { styled } from "styled-components";

const StyledSvgIcons = styled.svg`
  cursor: pointer;

  &:hover {
    path {
      fill: var(--cl-cyan);
    }
  }
`;

function SvgIcons({ xmins, width, height, d }) {
  return (
    <StyledSvgIcons xmlns={xmins} width={width} height={height}>
      <path fill="#FFF" d={d} />
    </StyledSvgIcons>
  );
}

export default SvgIcons;
