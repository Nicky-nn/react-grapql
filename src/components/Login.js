import React from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from './graphql'; // Asegúrate de importar tu mutación GraphQL

const Login = () => {
  const [login, { loading, error, data }] = useMutation(LOGIN_MUTATION);

  const handleLogin = async () => {
    try {
      const { data } = await login({
        variables: {
          shop: 'sandbox',
          email: 'nick077n@gmail.com',
          password: '13969594',
        },
      });

      // Aquí puedes manejar la respuesta de la mutación, por ejemplo, guardar el token en el estado de tu componente.
      console.log('Login successful:', data.login.token);
    } catch (error) {
      // Aquí puedes manejar el error de la mutación, por ejemplo, mostrar un mensaje de error.
      console.error('Login error:', error.message);
    }
  };

  return (
    <div>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
};

export default Login;
