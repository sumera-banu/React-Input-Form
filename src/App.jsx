import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[page, setPage]=useState("form");

  const[formData, setFormData]=useState({
    name:"", gender:"",address:"",city:"",agree:false,

  });
   
  const handleChange =(e) => {
    const{name, value, type, checked}=e.target;

    setFormData({...formData, [name]: type === "checkbox" ? checked : value,})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

     if(!formData.agree){
    alert("please confirm that entered data is correct");
    return;
  }
  setPage("result");
  }

return(
  <div>
    {page==="form" && (
    <>
    <h2>Registration Page</h2>

    <form onSubmit={handleSubmit}>
     <div>
       <label>Name:</label><br/>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
       <div>
        <label>Gender:</label><br/>
      <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
      <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
      <input type="radio" name="gender" value="Others" onChange={handleChange} /> Others
       </div>
      <div>
        <label>Address:</label><br/>
      <textarea  name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div>
        <label>City:</label><br/>
      <select  name="city" value={formData.city} onChange={handleChange} required>
        <option value="">Select city</option>
        <option value="Banglore">Banglore</option>
        <option value="Chennai">Chennai</option>
        <option value="Hyderabad">Hyderabad</option>
      </select>
      </div>
      <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange}  />
      <label>I confirm that entered data is correct</label>
      <br/>
       <button type="submit">Submit</button>
    </form>
    </>
    )}

     {page === "result" && (
        <>
          <h2>Submitted Details</h2>

          <p><b>Name:</b> {formData.name}</p>
          <p><b>Gender:</b> {formData.gender}</p>
          <p><b>Address:</b> {formData.address}</p>
          <p><b>City:</b> {formData.city}</p>

          <button onClick={() => setPage("form")}>Back</button>
        </>
      )}
  </div>
)
}

export default App
