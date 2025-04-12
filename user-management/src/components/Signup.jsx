import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    console.log('Entered Email:', email);
    console.log('Entered Password:', password);

    if (email === 'krishna@gmail.com' && password === '123456') {
      console.log('Login Successful!');
    } else {
      console.log('Invalid Email or Password');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: 300 }}>
        <form onSubmit={handleSignIn}>
          <h1 style={{ textAlign: 'center' }}> Sign In</h1>
          <TextField
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            SIGN IN
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
export default Login;
