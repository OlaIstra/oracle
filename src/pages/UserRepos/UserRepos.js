import React from "react";

import { Input } from "../../components/UI/Input/Input";
import { UserReposStyle, SortByRateStyle } from "./style";
import { ShadowDivStyle } from "../../components/RepoLink/style";

export const UserRepos = props => {
  return (
    <UserReposStyle>
      <ShadowDivStyle className="searchRepos">
        <Input type="text" placeholder="Find repo..." />
        <SortByRateStyle>
          <label htmlFor="checkbox">Sort by rate</label>
          <input type="checkbox" label="stars rating" id="checkbox" />
        </SortByRateStyle>
      </ShadowDivStyle>
    </UserReposStyle>
  );
};
