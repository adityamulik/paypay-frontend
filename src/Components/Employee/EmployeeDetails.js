import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const EmployeeDetails = () => {

  const history = useHistory();
  const employee = history.location.state.datas;

  const [formData, setData] = useState({});
  const [feedbackData, setFeedbackData] = useState([]);

  // console.log(feedbackData);

  useEffect(() => {
    axios.get(`/api/employee/feedback/${employee.employee_id}`)
      .then(res => setFeedbackData(res.data));
  }, [feedbackData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`/api/employees/${employee.employee_id}/feedback`, formData)
      .then(res => {
        if(res.status === 200) {
          window.alert(res.data.message)
          // const dataUpdate = feedbackData;
          // console.log(dataUpdate);
          // console.log(formData);
          // const index = oldData.tableData.id;
          // dataUpdate[index] = newData;
          // setData([...dataUpdate]);
        }
      })
      .catch(err => console.log(err));    
  }

  return (
    <div className="container-wrapper">
      <h1>Employee Detail</h1>
      <div>Name: {employee.name}</div>
      <div>Role: {employee.role}</div>
      <div>Email: {employee.email}</div>
      <div>Performance Review: {employee.performance_review}</div>
      <p>Add Feedback:</p>
      <form onSubmit={handleSubmit}>
        <textarea className="comment" style={{width: 400, height: 100}} placeholder="Type your feedback here." onChange={e => setData({...formData, feedback: e.target.value, feedback_user: employee.employee_id, feedback_by: 0})}></textarea>
        <br></br><br></br>
        <button type="submit">Submit</button>
      </form>
      <br></br>
      <h4>Feedback: </h4>
      {             
        feedbackData.length > 0 
        ?   
        feedbackData.map(item => {  
          return (
            <div className="feedback-container">
              <p>Feedback: {item.feedback}</p>
              <p>By: {item.feedback_by}</p>
            </div>
          )
        })
        :
        <p>No feedback available for {employee.name}!</p>
      }
    </div>
  )
};

export default EmployeeDetails;