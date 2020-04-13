import styled from "styled-components";
import { device } from "../../../styles/index";

export const FormStyle = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2rem auto;
  height: 100px;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  @media ${device.mobileL} {
    flex-direction: column;
    height: auto;
  }
`;
