import React from 'react';
import { Grid, Typography, Button } from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';

const Testimonials = () => {
  return (
    <Grid container style={{ borderBottom: '1px solid grey' }} spacing={10}>
      <Grid container direction="row" item={4}>
        <Grid item direction="column" style={{ display: "flex", height: '70vh', width: "25%" }}>
          <Typography variant="h2" style={{ marginLeft: '20px' }}>
            Our Clients
          </Typography>;
          <AdbIcon></AdbIcon>
        </Grid>

        <Grid item direction="column" style={{ display: "flex", height: '30vh', width: "25%" }}>
          <Typography variant="h2" style={{ marginLeft: '20px' }}>
            Our Clients
          </Typography>;
          <AdbIcon></AdbIcon>
        </Grid>

        <Grid item direction="column" style={{ display: "flex", height: '30vh', width: "25%" }}>
          <Typography variant="h2" style={{ marginLeft: '20px' }}>
            Our Clients
          </Typography>;
          <AdbIcon></AdbIcon>
        </Grid>

        <Grid item direction="column" style={{ display: "flex", height: '30vh', width: "25%" }}>
          <Typography variant="h2" style={{ marginLeft: '20px' }}>
            Our Clients
          </Typography>;
          <AdbIcon></AdbIcon>
        </Grid>

        <Grid item direction="column" style={{ display: "flex", height: '30vh', width: "25%" }}>
          <Typography variant="h2" style={{ marginLeft: '20px' }}>
            Our Clients
          </Typography>;
          <AdbIcon></AdbIcon>
        </Grid>

        <Grid item direction="column" style={{ display: "flex", height: '30vh', width: "25%" }}>
          <Typography variant="h2" style={{ marginLeft: '20px' }}>
            Our Clients
          </Typography>;
          <AdbIcon></AdbIcon>
        </Grid>

        <Grid item direction="column" style={{ display: "flex", height: '30vh', width: "25%" }}>
          <Typography variant="h2" style={{ marginLeft: '20px' }}>
            Our Clients
          </Typography>;
          <AdbIcon></AdbIcon>
        </Grid>

      </Grid>
    </Grid >
  )
}

export default Testimonials