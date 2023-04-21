import React from 'react';
import { Grid, Typography } from '@mui/material';
import ReusableButton from './Reusable/ReusableButton';

const GalleryInfo = () => {
  return (
    <Grid container style={{ border: '1px solid grey' }} spacing={2}>
      <Grid container direction="column" item={3}>
        <Grid xs={8} style={{ display: "flex", height: '10vh', margin: "50px" }}>
          <Typography variant="h1" style={{}}>
            Our Fleet
          </Typography>;
        </Grid>

        <Grid xs={4} style={{ display: "flex", height: '10vh', marginTop: "50px" }}>
          <Typography variant="body1" style={{ fontSize: '20px', }}>
            Our inspired solutions have helped shape modern acoustic design. Alluring spaces, internationally recognised for their architectural elegance and exceptional sound management live here.<br></br><br></br><br></br>
            <ReusableButton></ReusableButton>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default GalleryInfo