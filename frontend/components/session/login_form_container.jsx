import React from 'react';
import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formHeader: 'Log in to Leeway',
  formType: 'Log In'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
