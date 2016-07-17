import React from 'react';
import { Field } from 'react-redux-form';
import '../styles/form.css';

const FormField = ({ model, label, type }) => {
  return (
    <Field model={model} className="field">
      <label>{label}</label>
      <input type={type} />
    </Field>
  );
};

export default FormField;
