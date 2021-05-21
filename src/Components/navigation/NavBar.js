import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import firebase from 'firebase/app';

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

const NavBar = ({user}) => {

  const history = useHistory();

  const classes = useStyles();

  const onClickLogout = async () => {
    firebase.auth().signOut();
    history.push('/login');
  }

  return (
    <nav>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title} containerElement={<Link to="/" />}>
            <Button color="inherit" href="/" className={classes.title}>PayPay</Button>
          </Typography>  
          {user
            ?
              <div>
                <Button 
                  color="inherit"
                  href="/"
                >Home
                </Button>
                {
                  user.email === "adminuser@fullstackapp.com" 
                  ? 
                  <Button 
                    color="inherit"
                    href="/admin"
                  >Admin
                  </Button>
                  : null
                }                
                <Button 
                  color="inherit"
                  onClick={onClickLogout}
                >Logout
                </Button>
              </div>
              :
              null
          }                  
        </Toolbar>
      </AppBar>
    </nav>
  )
};

export default NavBar;