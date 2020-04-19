import * as actionTypes from "./actionTypes";
import axios from "../../shared/axios";

export const fetchReposStart = () => {
  return {
    type: actionTypes.FETCH_REPOS_START,
    loading: true
  };
};

export const fetchReposFailed = message => {
  return {
    type: actionTypes.FETCH_REPOS_FAILED,
    error: message,
    loading: false
  };
};

export const fetchReposSuccess = repos => {
  return {
    type: actionTypes.FETCH_REPOS_SUCCESS,
    repos: repos,
    loading: false
  };
};

export const initRepos = enteredText => {
  return async dispatch => {
    dispatch(fetchReposStart());
    try {
      let userRepos = await axios.get(`/${enteredText}/repos`);
      let res = userRepos.data.map(async elem => {
        try {
          let repoInfo = await axios.get(
            `https://api.github.com/repos/${enteredText}/${elem.name}/community/profile`,
            {
              headers: {
                Accept: "application/vnd.github.black-panther-preview+json"
              }
            }
          );
          return {
            id: elem.id,
            name: elem.name,
            html_url: elem.html_url,
            stargazers_count: elem.stargazers_count,
            health: repoInfo.data.health_percentage
          };
        } catch (e) {
          return {
            id: elem.id,
            name: elem.name,
            html_url: elem.html_url,
            stargazers_count: elem.stargazers_count,
            health: "none"
          };
        }
      });
      let result = await Promise.all(res);
      dispatch(fetchReposSuccess(result));
    } catch (e) {
      dispatch(fetchReposFailed(e.message));
    }
  };
};
