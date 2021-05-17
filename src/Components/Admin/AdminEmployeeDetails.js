import React from 'react';

const AdminEmployeeDetails = ({employee}) => {
  return (
    <div className="employeeList">
      <h1>Employee Detail</h1>
      <table>
        <thead>
          <th>Sr. No.</th>
          <th>Name</th>
          <th>Role</th>
          <th>Email</th>
          <th>Performance Review</th>
        </thead>
        <tbody>
          <td>{employee.employee_id}</td>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.performance_review}</td>
        </tbody>
      </table>
    </div>
  )
};

export default AdminEmployeeDetails;