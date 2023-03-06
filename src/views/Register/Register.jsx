import React, { useState } from 'react'
import './register.css'
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
  return (
    <>
        <h1 className='main-heading pt-1 text-left'>
            Register
        </h1>
        <div className='text-left pt-2'>
            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <div className='flex flex-col flex-start pb-2'>
                    <h3 className='form-heading pb-2'>
                        Enter your username or email address
                    </h3>
                    <TextField label="Username" variant="outlined"
                    {...register("username")} />
                </div>
                <div className='flex flex-col flex-start pb-2'>
                    <h3 className='form-heading pb-2'>
                    Enter your Full name
                    </h3>
                    <TextField label="Name" variant="outlined" 
                    {...register("name")}/>
                </div>
                <div className='flex flex-col flex-start pb-2'>
                    <h3 className='form-heading pb-2'>
                    Enter your Contact number
                    </h3>
                    <TextField label=" Contact number" variant="outlined" 
                    {...register("contactNumber")}/>
                </div>
                <div className='flex flex-col flex-start pb-2'>
                    <h3 className='form-heading pb-2'>
                    Enter your Age
                    </h3>
                    <TextField label="Age" variant="outlined" {...register("age")} />
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

export default Register