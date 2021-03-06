import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import team3 from "assets/img/faces/kendall.jpg";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { Col, Row } from "react-bootstrap";
import { Image } from "@material-ui/icons";

// Sections for this page


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function BlogItem(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="BEL KIF"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <div className style={{paddingTop:'100px',paddingBottom:'150px'}}>
            <h2 style={{color:'black',paddingTop:'50'}}>Blogs</h2>
        <Row>
        <Col md={3}><img src={team3}  alt="..." width='auto' height='245px'/></Col>
        <Col md={9}>
          <Card className='mb-5'>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
              T
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="100 most asked JavaScript Interview Questions and Answers"
        subheader="June 14, 2020"
      />
    
      <CardContent>
         
        <Typography variant="body2" color="textSecondary" component="p">
        JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.
        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          We are going to learn JavaScript, by answering the most frequently asked javascript interview questions.
          JavaScript Interview Questions and Answers Series

          </Typography>
          <Typography paragraph>
            <ol>
            <li>What is JavaScript?</li>
         <li>   What are the primitive types in JavaScript? or Explain the various JavaScript data types?</li>
         <li> What's the difference between undefined and null in JavaScript?</li>
         <li> What are the escape characters in JavaScript?</li>
         <li>What does the Logical AND (&&) operator do?</li>
         <li>What does the Logical OR (||) operator do?</li>
         <li> What is the fastest way to convert a string to a number?</li>
         <li> What are the different types of Error Name values in JavaScript?</li>
         <li> Please explain Self Invoking Function</li>
         <li> Explain difference between function declaration and function expression.</li>
         <li>What is the DOM?</li>
         <li>Please explain difference between attributes and property?</li>
         <li> What are cookies? How will you create, read, and delete a cookie using JavaScript?</li>
         <li>What is Event Propagation?</li>
         <li> What is Event Bubbling?</li>
         <li> What is Event Capturing?</li>
         <li>Explain difference between event.preventDefault() and event.stopPropagation() methods?</li>
         <li>How to know if the event.preventDefault() method was used in an element?</li>
         <li> What is Closure?</li>
         <li>How many ways can you create an array in JavaScript?</li>
         <li>How will you empty an array in JavaScript?</li>
            </ol>
          </Typography>
          <Typography paragraph>
          High-level definition of JavaScript is:
            JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.
            JavaScript is the most popular web scripting language, used for both client-side and server-side development.
            Supporting object-oriented programming abilities.
            JavaScript code can be inserted into HTML pages that can be understood and executed by web browsers.

          </Typography>
          <Typography>
          2. What are the primitive types in JavaScript?
          </Typography>
          
        </CardContent>
        
      </Collapse>
      
    </Card>
    </Col>
   </Row>
        

        
   
               
        </div>
        </div>   
      </div>
      <Footer />
    </div>
  );
}