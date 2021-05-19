import React from 'react';
import EmployeeTableAdmin from '../Table/EmployeeTableAdmin';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const AdminEmployeeList = () => {

  const useStyles = makeStyles((theme) => ({
    fab: {
      margin: theme.spacing(2),
    },
    absolute: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
  }));

  const classes = useStyles();
  
  return (
    <div className="container-wrapper">
      <h1>PayPay Admin Employee Dashboard</h1>
      <br></br>
      <Tooltip title="Add Employee" aria-label="add">
        <Fab color="primary" className={classes.fab} href="/admin/createemployee">
          <AddIcon>
          </AddIcon>
        </Fab>
      </Tooltip>      
      <EmployeeTableAdmin
      />
    </div>
  )
};

export default AdminEmployeeList;