import React from "react";
import { useStyles } from "./mainFeatured-styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import avatar from "../../assets/pics/andrew_avatar.JPG";

export default function MainFeatured() {
  const classes = useStyles();

  return (
    <Paper elevation={5} className={classes.mainFeatured}>
      <div className={classes.mainFeatured__overlay} />
      <Grid container>
        <Grid item md={12} className={classes.mainFeatured__contentGrid}>
          <div className={classes.mainFeatured__contentContainer}>
            <p className={classes.mainFeatured__contentTitle}>
              Full-Stack Web Developer　|　AI Engineer
            </p>
            <p className={classes.mainFeatured__content}>
              Hi. It's Andrew.
              <br />
              <br />
              I've developed several projects for the government departments,{" "}
              <br />
              also in the field of industry 4.0 and automation.
            </p>
          </div>
          <img
            src={avatar}
            className={classes.mainFeatured__avatar}
            alt="Andrew Lin"
          />
        </Grid>
        <Grid item md={12}></Grid>
      </Grid>
    </Paper>
  );
}
