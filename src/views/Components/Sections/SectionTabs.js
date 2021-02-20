import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";



const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs mb-5">
          <h3>Projects</h3>
          <GridContainer>
            <GridItem xs={8} sm={8} md={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="260"
                    width="70"
                    image={require("assets/img/trans.png")}
                    title="Bel Kiff News" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Degital transformation
                  </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      with bel kiff you can change all your
                  </Typography>
                  <Button >
                    Voir
                  </Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            </GridItem>
            <GridItem xs={8} sm={8} md={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="260"
                    width="70"
                    image={require("assets/img/Home.png")}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      FishComb
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      with bel kiff you can change all your
                    </Typography>
                     <NavLink to="/fishcomb">
                      <Button >
                        Voir
                      </Button>
                     </NavLink>
                  </CardContent>
                </CardActionArea>
              </Card>
            </GridItem>
            <GridItem xs={8} sm={8} md={4} className='card'>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="260"
                    width="70"
                    image={require("assets/img/trans.png")}
                    title="Bel Kiff" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Degital transformation
                </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      with bel kiff you can change all your
                </Typography>
                    <Button>
                      Voir
                </Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
