import React from "react";

import { ShadowDivStyle, RepoLinkStyle } from "./style";

export const RepoLink = props => {
  let health =
    props.health !== "none" ? <span>Health {props.health}</span> : null;

  return (
    <ShadowDivStyle>
      <RepoLinkStyle href={props.href}>{props.title}</RepoLinkStyle>
      {health}
      <span>Rate {props.stars}</span>
    </ShadowDivStyle>
  );
};
