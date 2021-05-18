import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EmployeeList from './Components/Employee/EmployeeList';
import EmployeeDetails from './Components/Employee/EmployeeDetails';
import AdminEmployeeList from './Components/Admin/AdminEmployeeList';
import CreateEmployee from './Components/Admin/CreateEmployee';

const routes = [
  {
    path: '/',
    Component: EmployeeList,
    exact: true
  },
  {
    path: '/employee/:id',
    Component: EmployeeDetails,
    exact: true
  },
  {
    path: '/admin/createemployee',
    Component: CreateEmployee
  },
  {
    path: '/admin',
    Component: AdminEmployeeList
  }
];

export const Routes = () => (
  <Router>
    <Switch>
      {routes.map((route, index) => (
        <Route 
          key={index}
          path={route.path}
          exact={route.exact}
        >
          <route.Component />
        </Route>
      ))}
    </Switch>
  </Router>
);