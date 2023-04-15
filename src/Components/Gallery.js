import React from 'react';
import { Grid, Typography, Button } from "@mui/material";
import EastIcon from '@mui/icons-material/East';;


const Gallery = () => {
  return (
    <Grid container style={{ borderBottom: '1px solid grey' }} spacing={10}>
      <Grid container direction="row" item={3}>
        <Grid item direction="column" style={{ position: "relative", border: '1px solid grey', display: "flex", height: '70vh', width: '27%' }}>
          <Typography variant="h7" style={{ marginLeft: '20px', marginTop: '50px' }}>
            Our Trucks & Equipment
          </Typography>;
          <Typography variant="h2" style={{ marginLeft: '20px' }}>
            Our Fleet
            <Button variant="outlined" size="medium" direction="row" style={{ position: 'absolute', bottom: '5%', left: '5%' }} >Browse our Gallery</Button>
            <EastIcon style={{ position: 'absolute', bottom: '5%', right: '20%' }} />
          </Typography>;

        </Grid>
        <Grid item direction="column" style={{ border: '1px solid grey', display: "flex", height: '20vh', width: '500px', margin: '20px' }}>
          <img src="/images/truck1.jpeg" alt=""></img>
        </Grid>

        <Grid item direction="column" style={{ border: '1px solid grey', display: "flex", height: '20vh', width: '550px', margin: '20px' }}>
          <img src="/images/truck2.jpeg" alt=""></img>
        </Grid>


      </Grid>
    </Grid>

  )
}

export default Gallery