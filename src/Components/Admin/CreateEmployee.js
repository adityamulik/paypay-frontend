import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const CreateEmployee = () => {

  const [formData, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios.post('/api/admin/employee', formData)
      .then(res => {
        if(res.status === 200) {
          window.alert(res.data.message)
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="container-wrapper">
      <h2>Create New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label for="name">Name: </label>
          <input type="text" placeholder="name" name="name" onChange={e => setData({...formData, name: e.target.value})}>
          </input>
        </div>
        <div className="form-input">
          <label for="email">Email: </label>
          <input type="text" placeholder="email" name="email" onChange={e => setData({...formData, email: e.target.value})}>
          </input>
        </div>
        <div className="form-input">
          <label for="role">Role: </label>
          <input type="text" placeholder="role" name="role" onChange={e => setData({...formData, role: e.target.value})}>
          </input>
        </div>
        <div className="form-input">
          <label for="performance_review">Performance Review: </label>
          <textarea
            style={{width: 450, height: 100}} 
            placeholder="performance_review" 
            name="performance_review" 
            onChange={e => setData({...formData, performance_review: e.target.value})}
          />
        </div>
        <div className="button">
          <button type="button" href="/">Back</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
};

export default CreateEmployee;

