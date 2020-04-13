import styled from "styled-components";
import { device, padding, color, radius } from "../../styles/index";

export const ShadowDivStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  padding: ${padding.medium}px;
  margin: 10px auto;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: ${color.white};
  border-radius: ${radius.normal}px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background: ${color.blueDark};
    color: ${color.white};
  }
  &.searchRepos {
    background: ${color.greyLight};
    color: inherit;
  }
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

export const RepoLinkStyle = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;
