import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import { Person } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  Nav: {
    color: "pink",
    margin: "3px",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <AppBar position="relative">
      

        <Toolbar style={{ backgroundColor: 'lightgrey' }}>
          
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Person />
          </IconButton>
          
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <div className={classes.Nav}>
            <Link to="/" >Home</Link>{' '}
            <Link to="about">About</Link>{' '}
            <Link to="products">Product</Link>
          </div>
          
        </Toolbar>

      </AppBar>
    </div>
  );
}
