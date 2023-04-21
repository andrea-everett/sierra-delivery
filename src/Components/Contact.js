import React from 'react'
import { Grid, Typography, Button } from "@mui/material";
import EastIcon from '@mui/icons-material/East';

const Contact = () => {
  return (
    <Grid container spacing={2}>
      <Grid container direction="column" item={3}>
        <Grid xs={8} style={{ display: "flex", margin: "6rem" }}>
          <Typography variant="h2" style={{}}>
            Contact Us
          </Typography>;
        </Grid>

        <Grid xs={4} style={{ display: "flex", height: '10vh', marginTop: "8rem" }}>
          <Typography variant="body1" style={{ fontSize: '20px', }}>
            We would love to hear from you! Contact us at:<br></br><br></br>
            <Button variant="outlined" style={{ color: 'black', borderRadius: '12px', margin: '1rem' }}>CALL at 1800-343-3839 <EastIcon style={{ margin: '.5rem' }} /></Button>
            <Button variant="outlined" style={{ color: 'black', borderRadius: '12px', margin: '1rem' }}>EMAIL at letstalk@sierradeliveryservice <EastIcon style={{ margin: '.5rem' }} /></Button>
          </Typography>
        </Grid>
      </Grid>
    </Grid>

  )
}

export default Contact