import React from "react";

import { ShadowDivStyle, RepoLinkStyle } from "./style";

export const RepoLink = props => {
  return (
    <ShadowDivStyle>
      <RepoLinkStyle href={props.href}>{props.title}</RepoLinkStyle>
      <span>Rate {props.stars}</span>
    </ShadowDivStyle>
  );
};
