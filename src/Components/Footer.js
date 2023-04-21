import React from 'react';
import { Grid, ListItem, ListItemText } from "@mui/material"

const Footer = () => {
  return (
    <div>
      <Grid container direction="row" style={{}}>
        <Grid item="" direction="column" style={{ border: '1px solid grey', height: "30rem", width: "25%" }}>
          <ListItem> <ListItemText primary="SOCIAL" style={{color:"grey" }}></ListItemText></ListItem>
          <ListItem> <ListItemText primary="Instagram"></ListItemText></ListItem>
          <ListItem> <ListItemText primary="Facebook"></ListItemText></ListItem>
          <ListItem> <ListItemText primary="LinkedIn"></ListItemText></ListItem>
          <ListItem> <ListItemText primary="Pinterest"></ListItemText></ListItem>
        </Grid>

        <Grid item="" direction="column" style={{ borderTop: '1px solid grey', borderRight: '1px solid grey', height: "30rem", width: "25%" }}>
          <ListItem> <ListItemText primary="SOCIAL" style={{color:"grey" }}></ListItemText></ListItem>
          <ListItem> <ListItemText primary="Instagram"></ListItemText></ListItem>
          <ListItem> <ListItemText primary="Facebook"></ListItemText></ListItem>
          <ListItem> <ListItemText primary="LinkedIn"></ListItemText></ListItem>
          <ListItem> <ListItemText primary="Pinterest"></ListItemText></ListItem>
        </Grid>

        <Grid item="" direction="column" style={{ borderTop: '1px solid grey', height: "30rem", width: "25%" }}>
          <ListItem> <ListItemText primary="EQUIPMENT" style={{color:"grey" }}></ListItemText></ListItem>
          <ListItem> <ListItemText primary="Trucks"></ListItemText></ListItem>
          <ListItem> <ListItemText primary="Fleet"></ListItemText></ListItem>
          <ListItem> <ListItemText primary=""></ListItemText></ListItem>
          <ListItem> <ListItemText primary=""></ListItemText></ListItem>
        </Grid>

        <Grid item="" direction="column" style={{ borderTop: '1px solid grey', height: "30rem", width: "25%" }}>
          <ListItem> <ListItemText primary="CLIENTS" style={{ textAlign: "right", color:"grey" }}></ListItemText></ListItem>
          <ListItem> <ListItemText primary="BP OIl" style={{ textAlign: "right" }}></ListItemText></ListItem>
          <ListItem> <ListItemText primary="HEllo" style={{ textAlign: "right" }}></ListItemText></ListItem>
          <ListItem> <ListItemText primary="Truck Company" style={{ textAlign: "right" }}></ListItemText></ListItem>
          <ListItem> <ListItemText primary="Truck Company" style={{ textAlign: "right" }}></ListItemText></ListItem>
        </Grid>


      </Grid>
    </div>
  )
}

export default Footer