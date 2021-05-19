import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: 20,
    fontFamily: "sans-serif"
  },
}));

const NavBar = () => {

  const classes = useStyles();

  return (
    <nav>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title} containerElement={<Link to="/" />}>
            <Button color="inherit" href="/" className={classes.title}>PayPay</Button>
          </Typography>          
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </nav>
  )
};

export default NavBar;