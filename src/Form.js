import React from 'react'
import useForm from './useForm';
import validate from './validateLogin';
import './index.css';
const Form = () => {
  const { handleChange, handleSubmit, values, errors} = useForm(submit, validate);

  function submit () {
    console.log("Submitted Successfully");
  }
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Email</label>
          <div>
            <input 
              className={`${errors.email && "inputError"}`}
              name="email" 
              type="email" 
              value={values.email}
              onChange={handleChange}
            />
            { errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input 
              className={`${errors.email && "inputError"}`}
              name="password" 
              type="password" 
              value={values.password}
              onChange={handleChange}
            />
            { errors.password && <p className="error">{errors.password}</p>}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form;

// Form
// Label / Input for email
// Label / Input for password
// signup button

// handle changes
// handle submit

// custom react hooks
// handle errors
// show errors if there are errors