import styled from "styled-components";
import { color, radius, padding, fontSize, height } from "../../styles/index";

export const CardStyle = styled.div`
  position: relative;
  margin: 0 auto 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${color.white};
  border-radius: ${radius.small}px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
`;

export const CardImageStyle = styled.div`
  position: relative;
  display: flex;
  background: ${color.blue};
  flex-direction: column;
  align-items: center;
  padding: ${padding.small}px ${padding.normal}px;
  margin-bottom: 20px;
`;

export const CardImgStyle = styled.img`
  display: block;
  border-radius: 50%;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 120px;
  height: 120px;
`;

export const CardContentStyle = styled.div`
  margin-bottom: 20px;
  padding: ${padding.medium};
  border-radius: 0 0 ${radius.small}px ${radius.small}px;
`;

export const CardNameStyle = styled.div`
  bottom: 10px;
  left: 10px;
  max-width: 100%;
  padding: ${padding.small}px;
  color: ${color.white};
  font-size: ${fontSize.medium}px;
`;

export const CardActiveStyle = styled.div`
  height: ${height.medium}px;
  display: flex;
  justify-content: space-around;
`;
