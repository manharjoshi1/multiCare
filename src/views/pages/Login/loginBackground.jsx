import React, { useEffect, useState } from 'react'
import './login.css'
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate, Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const LoginBackground = () => {
    const navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams({defaultInit : {
        userAccount : false 
    }});
    const [showSignIn , setShowSign] = useState(searchParams.get('userAccount') === 'false')
    // useEffect(()=>{
    //     setShowSign(searchParams.get('userAccount') === 'false')
    // },[searchParams])
    console.log("Show in parent",showSignIn)
    return (
        <div className="main-screen-register h-screen w-screen flex flex-row justify-evenly grid grid-cols-2">
        <div className='left-screen-register'>
        </div>
        <div className='right-screen-register flex justify-center  items-center'>
            <Paper sx={{
                textAlign:'center',
                padding:'30px',
                borderRadius:'40px',
                width: '500px',
            }} elevation={6}>
                <div className="flex justify-between">
                    <h3 className='welcome-heading'>
                        Welcome to <span className='highlight'>MultiCare Clinic</span>
                    </h3>
                    {!showSignIn &&  <div className='flex flex-col'>
                        <span className='have-account'>
                            Have an Account?
                        </span>
                        <Button 
                        onClick={()=>{
                            console.log("button clicked")
                            navigate("/signin");
                        }}
                        sx={{
                            fontWeight: 400,
                            fontSize: '13px',
                            lineHeight: '20px',
                            color: '#779341',
                        }} variant="text">Sign In</Button>
                    </div>}
                </div>
                <Outlet />
            </Paper>
        </div>
    </div>
  )
}

export default LoginBackground