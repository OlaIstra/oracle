import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { reposPerPage } from "../../../shared/constants";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2)
    }
  }
}));

export const BasicPagination = props => {
  const classes = useStyles();

  console.log(props.page);

  return (
    <div className={classes.root}>
      <Pagination
        count={Math.ceil(props.count / reposPerPage)}
        page={props.page}
        onChange={props.handleChange}
      />
    </div>
  );
};
