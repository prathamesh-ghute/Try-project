import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
// import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';

import "./SignIn.css";

const providers = [{ id: 'credentials', name: 'Email and Password' }];

export default function SlotPropsSignIn() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const router = useDemoRouter('/signin');

  const correctUsername = "admin@gmail.com";
  const correctPassword = "password123";

  const handleSignIn = () => {
    console.log("handleSignIn called");
    console.log("Entered Email:", email);
    console.log("Entered Password:", password);

    if (email === correctUsername && password === correctPassword) {
      setError('');
      console.log("Redirecting to /dashboard");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password!");
    }
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AppProvider theme={theme} router={router}>
      <>
      <h1>Zeal College of Engineering & Research</h1>
        <div className="signin-container">
          <SignInPage
            signIn={handleSignIn}
            slotProps={{
              emailField: { 
                variant: 'standard', 
                autoFocus: true,
                onChange: (e) => setEmail(e.target.value)
              },
              passwordField: { 
                variant: 'standard',
                onChange: (e) => setPassword(e.target.value)
              },
              submitButton: { variant: 'outlined' },
              rememberMe: {
                control: (
                  <Checkbox
                    name="tandc"
                    value="true"
                    color="primary"
                    sx={{ padding: 0.5, '& .MuiSvgIcon-root': { fontSize: 20 } }}
                  />
                ),
                color: 'textSecondary',
                label: 'I agree with the T&C',
              },
            }}
            providers={providers}
          />
          {error && <Alert variant="text" color="secondary" severity="error" className='error'>{error}</Alert>}
        </div>
      </>
    </AppProvider>
  );
}
