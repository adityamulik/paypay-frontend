import React, { useEffect, useState } from 'react';
import useEmployeeRecords from './useEmployeeRecords';

const EmployeeList = () => {

  const { employees, isLoading: isLoadingEmployees, setEmployees } = useEmployeeRecords();

  console.log(employees);

  return (
    <div className="employeeList">
      <h1>PayPay Employee Dashboard</h1>
      <br></br>
    </div>
  )
};

export default EmployeeList;