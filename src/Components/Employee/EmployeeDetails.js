import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const EmployeeDetails = () => {

  const history = useHistory();
  const employee = history.location.state.datas;

  const [formData, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    axios.post(`/api/employees/${employee.employee_id}/feedback`, formData)
      .then(res => {
        if(res.status === 200) {
          window.alert(res.data.message)
        }
      })
      .catch(err => console.log(err));
  }

  // console.log(employee.feedback);

  return (
    <div className="employeeList">
      <h1>Employee Detail</h1>
      <div>Name: {employee.name}</div>
      <div>Role: {employee.role}</div>
      <div>Email: {employee.email}</div>
      <div>Performance Review: {employee.performance_review}</div>
      <p>Add Feedback:</p>
      <form onSubmit={handleSubmit}>
        <textarea class="comment" style={{width: 400, height: 100}} placeholder="Type your feedback here." onChange={e => setData({...formData, feedback: e.target.value, feedback_user: employee.employee_id, feedback_by: 0})}></textarea>
        <br></br><br></br>
        <button type="submit">Submit</button>
      </form>
      <br></br>
      {                
        employee.feedback.map(item => {
            if (item !== null) {
              return (
                <div className="feedback-container">
                  <p>Feedback: {item.feedback}</p>
                  <p>By: {item.feedback_by}</p>
                </div>
              )
            }
            else {
              return <p>No feedback for the employee has been given.</p>
            }
        })
      }
    </div>
  )
};

export default EmployeeDetails;