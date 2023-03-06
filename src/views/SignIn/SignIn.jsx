import React, { useEffect, useState } from 'react'
import './signin.css'
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';


const SignIn = () => {
    let [searchParams, setSearchParams] = useSearchParams({
        userAccount : false
    });  
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    console.log("show here child")
  return (
      <>
        <h1 className='main-heading pt-1 text-left'>
            Sign in
        </h1>
        <div className='text-left pt-2'>
            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <div className='flex flex-col flex-start pb-2'>
                    <h3 className='form-heading pb-2'>
                        Enter username or email address
                    </h3>
                    <TextField label="Username" variant="outlined"
                    {...register("username")} />
                </div>
                <div className='flex flex-col flex-start pb-2'>
                    <h3 className='form-heading pb-2'>
                    Enter Password
                    </h3>
                    <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                    </FormControl>
                    {/* <TextField label="Password" variant="outlined" 
                    {...register("password")}/> */}
                </div>
                <Button type="submit" sx={{
                    width: '236px',
                    height: '54px',
                    background: '#779341',
                }} variant="contained">Submit</Button>
            </form>
        </div>
      </>
  )
}

export default SignIn