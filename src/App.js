import DrawerAppBar from "./Components/DrawerAppBar";
import ReusableButton from "./Components/Reusable/ReusableButton";
import Contact from "./Components/Contact";
import '@fontsource/roboto/300.css';

import { Grid, Typography } from "@mui/material"
import Gallery from "./Components/Gallery";
import GalleryInfo from "./Components/GalleryInfo";
import Testimonials from "./Components/Testimonials.js"

const App = () => {

  return (

    <div className='App'>
      <DrawerAppBar />
      <Grid container direcction="column">
        <Grid item directon="column" style={{ display: 'flex', alignItems: "center", height: "100vh", margin: '50px' }}>
          <Typography variant="h1" >
            SIERRA DELIVERY SERVICES<br></br>
            <ReusableButton ></ReusableButton>
          </Typography>
        </Grid>
      </Grid>



      <Grid container direction="column">
        <img src="/images/truck-cover.jpeg" alt=""></img>
      </Grid>
      <GalleryInfo />
      <Gallery />
      <Testimonials />
      <Contact />



    </div>
  )
}

export default App;
