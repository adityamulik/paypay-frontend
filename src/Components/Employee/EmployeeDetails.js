import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import useUser from '../auth/useUser';
import { Divider, Grid, Paper } from "@material-ui/core";

const EmployeeDetails = () => {
  const { isLoading, user } = useUser();

  const history = useHistory();
  const employee = history.location.state.datas;

  const [formData, setData] = useState({});
  const [feedbackData, setFeedbackData] = useState([]);

  // console.log(feedbackData);

  useEffect(() => {
    axios.get(`/api/employee/${employee.employee_id}/feedback/`)
      .then(res => setFeedbackData(res.data));
  }, [feedbackData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`/api/employee/${employee.employee_id}/create/feedback`, formData)
      .then(res => {
        if(res.status === 200) {
          window.alert(res.data.message)
          setData("");
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
        <textarea className="comment" style={{width: 400, height: 100}} placeholder="Type your feedback here." onChange={e => setData({...formData, feedback: e.target.value, feedback_user: employee.employee_id, feedback_by: user.email})}></textarea>
        <br></br><br></br>
        <button type="submit">Submit</button>
      </form>
      <br></br>
      <h4>Feedbacks: </h4>      
      {             
        feedbackData.length > 0 
        ?   
        feedbackData.map(item => {  
          return (
            <Paper style={{ padding: "10px 20px" }}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid justifyContent="left" item xs zeroMinWidth>
                  <h4 style={{ margin: 0, textAlign: "left" }}>{item.feedback_by}</h4>
                  <p style={{ textAlign: "left" }}>
                    {item.feedback}
                  </p>
                  <p style={{ textAlign: "left", color: "gray" }}>
                    posted 1 minute ago
                  </p>
                </Grid>
              </Grid>
              <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
            </Paper>
          )
        })
        :
        <p>No feedback available for {employee.name}!</p>
      }
    </div>
  )
};

export default EmployeeDetails;