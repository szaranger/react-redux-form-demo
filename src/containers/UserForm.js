import React from 'react';
import { connect } from 'react-redux';
import { Field, Form, actions } from 'react-redux-form';
import FormField from '../components/FormField';

const UserForm = ({ dispatch, user }) => {

  return (
    <Form model="user"
      onSubmit={(user) => dispatch(actions.submit('user'/*, somePromise*/))}>

      <FormField model="user.firstName" label="First name:" type="text" />
      <FormField model="user.lastName" label="Last name:" type="text" />

      <button type="submit">
        Register { user.firstName } { user.lastName }!
      </button>
    </Form>
  );
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(UserForm);
