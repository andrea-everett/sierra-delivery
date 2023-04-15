import DrawerAppBar from "./Components/DrawerAppBar";
import ReusableButton from "./Components/Reusable/ReusableButton";
import '@fontsource/roboto/300.css';

import { Grid, Typography } from "@mui/material"

const App = () => {

  return (

    <div className='App'>
      <DrawerAppBar />
      <Grid container direcction="column">
        <Grid item directon="column" style={{ display: 'flex', alignItems: "center", height: "100vh", margi: '50px' }}>
          <Typography variant="h1" >
            SIERRA DELIVERY SERVICES
          </Typography>;
        </Grid>
      </Grid>



      <Grid container direction="column" >
        <Grid item directon="column" style={{ display: 'flex', justifyContent: "left", alignItems: "top" }} >
          <ReusableButton ></ReusableButton>
        </Grid>
      </Grid>

      <Grid container direction="column">
        <img src="/images/truck-cover.jpeg" alt=""></img>
      </Grid>



    </div>
  )
}

export default App;
