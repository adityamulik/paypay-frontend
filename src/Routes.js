import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EmployeeDashboard from './Components/Employee/EmployeeDashboard';
import AdminEmployeeDashboard from './Components/Admin/AdminEmployeeDashboard';

const routes = [
  {
    path: '/',
    Component: EmployeeDashboard,
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