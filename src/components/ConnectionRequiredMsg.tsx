import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    padding: "15px",
    alignItems: "center",
    justifyItems: "center",
    gridTemplateRows: "50px",
    color: '#d2ccc4',
    marginTop: 50,
  },
  box: {
    padding: '25px',
    border: 'solid',
    borderColor: 'white',
    borderWidth: 'thick',
    background: 'linear-gradient(30deg, #1E63A3 0%, #FFFFFF 100%)',
    color: 'black'
  }
}));

/**
 * @dev this handles the connection message asking to connect Metamask
 */

export const ConnectionRequiredMsg = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <div className={classes.box}>
            <Typography variant="h6" component="span">
            Please connect your Metamask account (on Rinkeby network) to mint!
            </Typography>
        </div>
    </div>
  );
};