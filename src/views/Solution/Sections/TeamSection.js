import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/iot_2.jpg";
import team2 from "assets/img/mobile.png";
import team3 from "assets/img/web-dev.jpg";
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Card, Col } from 'react-bootstrap'

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <div>
        <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
            <Card style={{ width: '22rem' }}>
            <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="260"
                    width="70"
                    image={team3}
                    title="Contemplative Reptile"
                  />
            <Card.Body>
              <h4 className={classes.cardTitle}>
                Web Dev
                <br />
              </h4>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
            </Card.Body>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <Card style={{ width: '22rem' }}>
            <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="260"
                    width="70"
                    image={team2}
                    title="Contemplative Reptile"
                  />
            <Card.Body>
              <h4 className={classes.cardTitle}>
                Mobile Dev
                <br />
              </h4>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
            </Card.Body>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
            <Card style={{ width: '22rem' }}>
            <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="260"
                    width="70"
                    image={team1}
                    title="Contemplative Reptile"
                  />
            <Card.Body>
              <h4 className={classes.cardTitle}>
                IOT Dev
                <br />
              </h4>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
            </Card.Body>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
