import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  createRef
} from "react";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";

import { sortByName, sortByStars } from "../../shared/utils";

import { Input } from "../../components/UI/Input/Input";
import { RepoLink } from "../../components/RepoLink/RepoLink";
import { UserReposStyle, SortByRateStyle } from "./style";
import { ShadowDivStyle } from "../../components/RepoLink/style";

const ref = createRef();

export const UserRepos = props => {
  const dispatch = useDispatch();

  const checkBox = useRef(null);

  const login = useSelector(state => {
    if (state.user.user) {
      return state.user.user.login;
    }
  });

  const onInitRepos = useCallback(
    (login, event) => {
      dispatch(actions.initRepos(login));
    },
    [dispatch]
  );

  useEffect(() => {
    onInitRepos(login);
  }, [login, onInitRepos]);

  const repos = useSelector(state => {
    if (state.repos.repos) {
      return state.repos.repos;
    }
  });

  const error = useSelector(state => {
    return state.repos.error;
  });

  const [reposToDisplay, setReposToDisplay] = useState(null);

  useEffect(() => {
    setReposToDisplay(repos);
  }, [repos]);

  const onFindRepo = inputVal => {
    checkBox.current.checked
      ? setReposToDisplay(sortByStars(sortByName(repos, inputVal)))
      : setReposToDisplay(sortByName(repos, inputVal));
  };

  const onSortByStars = event => {
    if (checkBox.current.checked) {
      setReposToDisplay(sortByStars(reposToDisplay));
    }
  };

  let repoBlock;

  reposToDisplay
    ? (repoBlock = (
        <div>
          {reposToDisplay.map(element => {
            return (
              <RepoLink
                key={element.id}
                title={element.name}
                href={element.html_url}
                stars={element.stargazers_count}
              />
            );
          })}
        </div>
      ))
    : (repoBlock = <ShadowDivStyle>{error}</ShadowDivStyle>);

  return (
    <UserReposStyle>
      <ShadowDivStyle className="searchRepos">
        <Input
          type="text"
          placeholder="Find repo..."
          changed={onFindRepo}
          ref={ref}
        />
        <SortByRateStyle>
          <label htmlFor="checkbox">Sort by rate</label>
          <input
            type="checkbox"
            label="stars rating"
            onChange={onSortByStars}
            ref={checkBox}
            id="checkbox"
          />
        </SortByRateStyle>
      </ShadowDivStyle>
      {repoBlock}
    </UserReposStyle>
  );
};
