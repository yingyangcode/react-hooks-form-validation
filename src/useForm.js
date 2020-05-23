import {useState, useEffect} from 'react'

const useForm = (callback, validate ) => {
  const [values, setValues] = useState({email: "", password: ""});
  const [errors, setErrors] = useState({}); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  // new State for errors
  // function that validates these errors
  // pass these errors back to form


  const handleChange = event => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // handling errors
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    // check to see if there are no errors
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
      // call out callback
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  }
}

export default useForm
