import styled from "styled-components";
import { color, device } from "../../../styles/index";

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  padding: 0 0.75rem;
  min-height: 1px;
  width: 50%;
  @media ${device.mobileL} {
    width: 90%;
  }
`;

export const InputStyle = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${color.greyLight};
  border-radius: 0;
  outline: none;
  height: 50px;
  width: 100%;
  font-size: 20px;
  margin: 0 0 8px 0;
  padding: 0;
  box-shadow: none;
  box-sizing: content-box;
`;
