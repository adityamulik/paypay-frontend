import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EmployeeList from './Components/Employee/EmployeeList';
import EmployeeDetails from './Components/Employee/EmployeeDetails';
import AdminEmployeeList from './Components/Admin/AdminEmployeeList';
import CreateEmployee from './Components/Admin/CreateEmployee';
import Login from './Components/auth/Login';
import NavBar from './Components/navigation/NavBar';
import PrivateRoute from './Components/auth/PrivateRoute';

const routes = [
  {
    path: '/',
    Component: EmployeeList,
    private: true,
    exact: true,
  },
  {
    path: '/employee/:id',
    Component: EmployeeDetails,
    private: true
  },
  {
    path: '/admin/createemployee',
    Component: CreateEmployee,
    private: true
  },
  {
    path: '/admin',
    Component: AdminEmployeeList,
    private: true
  },
  {
    path: '/login',
    Component: Login
  }
];

export const Routes = ({ isLoading, user }) => (
  <Router>
    <NavBar user={user} />
    <Switch>
      {routes.map((route, index) => {

        const RouteType = route.private ? PrivateRoute : Route;

        return (
          <RouteType 
            key={index}
            path={route.path}
            exact={route.exact}
            isLoading={isLoading}
            isAuthed={!!user}
          >
            <route.Component />
          </RouteType>
        )
      })}
    </Switch>
  </Router>
);