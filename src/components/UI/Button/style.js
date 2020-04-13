import styled from "styled-components";
import {
  variable,
  device,
  padding,
  height,
  lineHeight,
  radius,
  fontSize,
  color
} from "../../../styles/index";

export const ButtonStyle = styled.button`
  height: ${height.small}px;
  line-height: ${lineHeight.large}px;
  padding: 0 ${padding.normal}px;
  text-transform: uppercase;
  border: none;
  border-radius: ${radius.small}px;
  font-size: ${fontSize.small}px;
  outline: 0;
  text-decoration: none;
  color: ${color.white};
  text-align: center;
  letter-spacing: 0.5px;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  background: ${props =>
    props.disabled ? variable.colorGreyLight : variable.colorPrimary};
  pointer-events: ${props => (props.disabled ? "none" : "all")};
  @media ${device.mobileL} {
    margin-bottom: 20px;
  }
`;
