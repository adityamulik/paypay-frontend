import React, { useState } from 'react';
import axios from 'axios';

const CreateEmployee = () => {

  const [formData, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios.post('/api/admin/employee', formData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <div className="create-employee-wrapper">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" name="name" onChange={e => setData({...formData, name: e.target.value})}>
        </input>
        <input type="text" placeholder="email" name="email" onChange={e => setData({...formData, email: e.target.value})}>
        </input>
        <input type="text" placeholder="role" name="role" onChange={e => setData({...formData, role: e.target.value})}>
        </input>
        <input type="text" placeholder="performance_review" name="performance_review" onChange={e => setData({...formData, performance_review: e.target.value})}>
        </input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

export default CreateEmployee;

