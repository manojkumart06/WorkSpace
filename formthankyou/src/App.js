
import { useState } from 'react';
import './App.css';
import Thankyou from './Thankyou';

function App() {
  const [formData,setFormData] = useState({name : '',email : '',dob : '',gender:'',image : null});

  const [submitted,setSubmitted] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }


  return (
    <div className="App">
      {!submitted ?
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type='text' name= 'name' value={formData.name} required onChange={handleChange}/><br/>
        <label>Email: </label>
        <input type='email' name='email' value={formData.email} required onChange={handleChange}/><br/>
        <label>DateOfBirth:</label>
        <input type='date' name ='dob' value={formData.dob} required onChange={handleChange}/><br/>
        <label>
          Specifiy your Gender :
          <select name='gender'value={formData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select><br/>
        </label>
        <label>Image :</label>
        <input type='file' accept='image/*' onChange={handleImageChange}/><br/>
        <button type='submit'>Submit</button>
      </form>
      :
      <Thankyou formData = {formData}/>
      }
    </div>
  );
}

export default App;
