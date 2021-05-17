import React, { useEffect, useState } from 'react';
import EmployeeDetails from './EmployeeDetails';
import useEmployeeRecords from '../CustomHooks/useEmployeeRecords';

const EmployeeList = () => {

  const { employees, isLoading: isLoadingEmployees, setEmployees } = useEmployeeRecords();

  // let reviews;

  // if(employees.length > 0) {
  //   reviews = employees.map(employee => {
  //     if(employee.performance_review !== null) {
  //       return (
  //         <li key={employee.name}><a href={`/employee/${employee.employee_id}`}>{employee.name}</a></li>
  //       )
  //     }
  //   })
  // };

  return (
    <div className="employeeList">
      <h1>PayPay Employee Dashboard</h1>
      <br></br>
      <p>Employee's with Performance Review Completed! Click the name to view details.</p>
      {employees.map(item => {
        if(item.performance_review !== null) {
          return (
            <EmployeeDetails 
              key={item.name}
              employee={item}
            />
          )
        }        
      })}
    </div>
  )
};

export default EmployeeList;