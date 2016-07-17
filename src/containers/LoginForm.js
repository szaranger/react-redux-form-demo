import React from 'react';
import { connect } from 'react-redux';
import { Field, Form, actions } from 'react-redux-form';
import FormField from '../components/FormField';

const LoginForm = ({ user }) => {
  return (
    <form>
       <FormField model="user.username" label="Username" type="text" />
       <FormField model="user.password" label="Password" type="password"/>

       <button>Log in</button>
     </form>
  );
};

const selector = (state) => ({ user: state.user });

export default connect(selector)(LoginForm);
