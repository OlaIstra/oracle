import styled from "styled-components";
import { device } from "../../styles/index";

export const UserReposStyle = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

export const SortByRateStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  label {
    margin-right: 10px;
  }
  input {
    margin-bottom: 0px;
  }
  @media ${device.mobileL} {
    justify-content: center;
  }
`;
