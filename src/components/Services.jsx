import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const Services = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center">Our Services</h2>
      <Grid container spacing={4} className="mt-6">
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Software Development</Typography>
              <Typography variant="body2">We develop custom software solutions.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Deployment</Typography>
              <Typography variant="body2">We handle deployment to ensure a smooth launch.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Maintenance</Typography>
              <Typography variant="body2">We provide ongoing maintenance and support.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
