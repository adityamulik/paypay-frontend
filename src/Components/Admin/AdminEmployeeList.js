import React from 'react';
import useEmployeeRecords from '../CustomHooks/useEmployeeRecords';
import ReactVirtualizedTable from '../Table/EmployeeTableAdmin';
import {Link} from 'react-router-dom';

const AdminEmployeeList = () => {

  <h1>PayPay Employee Admin Dashboard</h1>
  const { employees, isLoading: isLoadingEmployees, setEmployees } = useEmployeeRecords();

  return (
    <div className="employeeList">
      <h1>PayPay Admin Employee Dashboard</h1>
      <br></br>
      <Link
        to="/admin/createemployee"
      >
      Add Employee
      </Link>
      <p>Employee's with Performance Review Completed! Click the name to view details.</p>
      <br></br>
      <ReactVirtualizedTable 
        employees={employees}
      />
    </div>
  )
};

export default AdminEmployeeList;