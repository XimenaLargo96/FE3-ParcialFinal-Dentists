import React from "react";
import { useState } from "react";

const Form = () => {
  
  const [values, setValues] = useState({
    name: '',
    email: ''
  });

  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);

  const onHandlerChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const validName = (name) => {
    return name.length >= 5
  }

  const validEmail = (email) => {
    let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return validEmail.test(email)
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (validName(values.name) && validEmail(values.email)) {
      setMessage(true);
      setError(false)
      return;
    } 
    else {
      setError(true);
      setMessage(false)
      return;
    }
  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type="text"
          name='name'
          placeholder='Nombre completo'
          onChange={onHandlerChange}
          value={values.name} />
        <input type="email"
          name='email'
          placeholder='email'
          onChange={onHandlerChange}
          value={values.email} />
        <button type='submit'>Enviar</button>
      </form>
      {message && <div>Gracias {values.name}, te contactaremos cuanto antes vía mail</div> }
      {error && <div>Por favor verifique su información nuevamente!</div>}
    </div>
  );
};

export default Form;
