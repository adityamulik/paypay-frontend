import React from 'react';

const EmployeeDetails = ({employee}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit!");
  }

  console.log(employee.feedback);

  return (
    <div className="employeeList">
      <h1>Employee Detail</h1>
      <div>Name: {employee.name}</div>
      <div>Role: {employee.role}</div>
      <div>Email: {employee.email}</div>
      <div>Performance Review: {employee.performance_review}</div>
      <p>Add Feedback:</p>
      <form onSubmit={handleSubmit}>
        <textarea class="comment" style={{width: 400, height: 100}} placeholder="Type your feedback here."></textarea>
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
                  <p>By: </p>
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