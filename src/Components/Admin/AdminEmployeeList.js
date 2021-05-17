import React from 'react';
import useEmployeeRecords from '../CustomHooks/useEmployeeRecords';
import AdminEmployeeDetails from './AdminEmployeeDetails';
import ReactVirtualizedTable from '../Table/EmployeeTable';

const AdminEmployeeList = () => {

  <h1>PayPay Employee Admin Dashboard</h1>
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

  const empTable = employees.map(item => {
    return (
          <tbody>
            <td>{item.employee_id}</td>
            <td>{item.name}</td>
            <td>{item.role}</td>
            <td>{item.email}</td>
            <td>{item.performance_review}</td>
          </tbody>
    )
  })
  // };

  return (
    <div className="employeeList">
      <h1>PayPay Admin Employee Dashboard</h1>
      <br></br>
      <p>Employee's with Performance Review Completed! Click the name to view details.</p>
      <ReactVirtualizedTable 
        employees={employees}
      />
    </div>
  )
};

export default AdminEmployeeList;