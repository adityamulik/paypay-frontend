import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EmployeeList from './Components/Employee/EmployeeList';
import AdminEmployeeDashboard from './Components/Admin/AdminEmployeeDashboard';

const routes = [
  {
    path: '/',
    Component: EmployeeList,
    exact: true
  },
  {
    path: '/admin',
    Component: AdminEmployeeDashboard
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