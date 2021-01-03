import React from "react";
import { Grid } from "@material-ui/core";
import CardWithMedia from "../../components/cardWithMedia/CardWithMedia";

function FeaturedWork() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <CardWithMedia />
      </Grid>
      <Grid item xs={6}>
        <CardWithMedia />
      </Grid>
    </Grid>
  );
}

export default FeaturedWork;
