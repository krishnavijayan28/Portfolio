import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios'
import{
    Button,
    TextField,
    Box,
    Typography,
    Container,
    Paper
} from '@mui/material';

const Login = () => {
    const{
        register,
        handleSubmit,
        formState:{errors}
     }=useForm()

     const onSubmit=async(data)=>{
        try {
            console.log(data)
            const response=await axios.post('http://localhost:3000/users/login',data);
            console.log(response.data);
            alert('Login successful');
            
        } catch (error) {
            console.error(error);
            alert(error.response.data.message);
            
        }
     };

  return (
    <Container maxWidth='xs'>
        <Paper elevation={3} sx={{p:4,mt:8}}>
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
            }}>
                <Typography component="h1" variant="h5" gutterBottom>
                    Sign In
                </Typography>
                <Box 
                component="form" onSubmit={handleSubmit(onSubmit)} noValidate
                
                sx={{mt:1}}>
                <TextField
                    fullWidth
                    id="email"
                    label="Email address"
                    name="email"
                    autoComplete='email'
                    autoFocus
                    {...register('email',{
                        pattern:{
                            value:/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                            message:"invalid email format"
                        }
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    />

                 <TextField
                    required
                    fullWidth
                    id="Password"
                    label="Password"
                    name="Password"
                    type="Password"
                    autoComplete='current-Password'
                    {...register('password',{
                        required:'password is required',
                        minLength:{
                            value:6,message:'password must be atleast 6 characters'
                        }
                    })}
                    error={!!errors.password}
                    helperText={errors.password?.message}

                    /> 
                    <Button type="submit" fullwidth variant="contained">Sign In</Button>   
            </Box>
            </Box>


        </Paper>



    </Container>

)}

export default Login