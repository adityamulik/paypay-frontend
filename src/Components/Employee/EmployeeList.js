import React, { useEffect, useState } from 'react';
import EmployeeDetails from './EmployeeDetails';
import useEmployeeRecords from '../CustomHooks/useEmployeeRecords';
import ReactVirtualizedTable from '../Table/EmployeeTable';

const EmployeeList = () => {

  const { employees, isLoading: isLoadingEmployees, setEmployees } = useEmployeeRecords();

  const empsWithPerfReview = [];

  employees.forEach(item => {
    if(item.performance_review !== null) {
      empsWithPerfReview.push(item)
    }    
  })

  return (
    <div className="employeeList">
      <h1>PayPay Employee Dashboard</h1>
      <br></br>
      <p>Employee's with Performance Review Completed! Click the name to view details.</p>
      <ReactVirtualizedTable 
        employees={empsWithPerfReview}
      />
    </div>
  )
};

export default EmployeeList;