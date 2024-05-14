import React from 'react';
import { GoogleLogin } from 'react-google-login';

const OAuth2Login = ({ clientId, onSuccess, onFailure }) => {
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default OAuth2Login;
