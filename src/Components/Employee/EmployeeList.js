import React, { useEffect, useState } from 'react';
import EmployeeTable from '../Table/EmployeeTable';

const EmployeeList = () => {

  return (
    <div className="container-wrapper">
      <h1>PayPay Employee Dashboard</h1>
      <br></br>
      <p>Employee's with Performance Review Completed! Click the name to view details.</p>
      <EmployeeTable 
      />
    </div>
  )
};

export default EmployeeList;