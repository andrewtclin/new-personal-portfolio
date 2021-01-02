import React, { useState } from "react";
import { useStyles } from "./header-styles";
import { Divider, Grid } from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import SimpleSelect from "../../components/simpleSelect/SimpleSelect";

function Header() {
  const classes = useStyles();
  const [select, setSelect] = useState(0);

  return (
    <div className={classes.header}>
      <Grid
        container
        spacing={4}
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.header__top}
      >
        <Grid item xs={4}>
          <div className={classes.header__selectContainer}>
            <PublicIcon />
            <SimpleSelect
              value={select}
              handleSelectChange={setSelect}
              className={classes.header__select}
            />
          </div>
        </Grid>

        <Grid item xs={4}>
          <p className={classes.header__title}>TC. Andrew</p>
        </Grid>
        <Grid item xs={4} />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={2}>
          <p className={classes.header__option}>Home</p>
        </Grid>
        <Grid item xs={2}>
          <p className={classes.header__option}>About</p>
        </Grid>
        <Grid item xs={2}>
          <p className={classes.header__option}>Projects</p>
        </Grid>
        <Grid item xs={2}>
          <p className={classes.header__option}>Experience</p>
        </Grid>
        <Grid item xs={2}>
          <p className={classes.header__option}>Skillsets</p>
        </Grid>
        <Grid item xs={2}>
          <p className={classes.header__option}>Testimonials</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
