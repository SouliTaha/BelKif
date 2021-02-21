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
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Card, Col } from 'react-bootstrap'

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
           
          <Col sm={8} xs={8} md={4}>
            <Card style={{ width: '22rem' }}>
            <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="260"
                    width="70"
                    image={require("assets/img/Home.png")}
                    title="Contemplative Reptile"
                  />
            <Card.Body>
              <Card.Title>FishComb</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <NavLink to="/fishcomb">
                      <Button >
                        Voir
                      </Button>
                     </NavLink>
            </Card.Body>
            </Card>
            </Col>
            <Col sm={8} xs={8} md={4}>
            <Card style={{ width: '22rem' }}>
            <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="260"
                    width="70"
                    image={require("assets/img/Home.png")}
                    title="Contemplative Reptile"
                  />
            <Card.Body>
              <Card.Title>FishComb</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <NavLink to="/fishcomb">
                      <Button >
                        Voir
                      </Button>
                     </NavLink>
            </Card.Body>
            </Card>
            </Col>
            <Col sm={8} xs={8} md={4}>
            <Card style={{ width: '22rem' }}>
            <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="260"
                    width="70"
                    image={require("assets/img/Home.png")}
                    title="Contemplative Reptile"
                  />
            <Card.Body>
              <Card.Title>FishComb</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <NavLink to="/fishcomb">
                      <Button >
                        Voir
                      </Button>
                     </NavLink>
            </Card.Body>
            </Card>
            </Col>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
