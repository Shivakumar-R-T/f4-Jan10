import React, { useState } from 'react'
import Input from './component/Input/Input.js'
import Button from './component/Button/Button.js'
import Notification from './component/Notification/Notification.js'

import './Method2.css'

import * as EmailValidator from 'email-validator';

const Method2 = () => {
    const [formData, setformData] = useState({
        fulllname: "",
        email: "",
        password: "",
        confPass: ""
    })

    const [errMsg, setErrmsg] = useState("All Feilds are mandatory");

    const handleChanges = (event) => {
        const { name, value } = event.target;
        const updates = { ...formData };
        updates[name] = value;
        setformData(updates);

    }

    const validationFormData = () => {
        setErrmsg("All Feilds are mandatory")
        if (formData.fulllname && formData.email && formData.password && formData.confPass) {
            if (formData.password === formData.confPass) {
                if (EmailValidator.validate(formData.email)) {
                    setErrmsg("")
                }
                else {
                    setErrmsg("Invalid Email")
                }
            }
            else {
                setErrmsg("Password do not match")
            }
        }


    }
    return (
        <div className='window'>
   <h1>Sign UP</h1>
               <div className='body'>
            <Input type='text' value={formData.fulllname} placeholder="Enter your fullname " name='fulllname' onChange={handleChanges} />
            <Input type='email' value={formData.email} placeholder="Enter your Email" name='email' onChange={handleChanges} />
            <Input type='text' value={formData.password} placeholder="Enter password " name='password' onChange={handleChanges} />
            <Input type='text' value={formData.confPass} placeholder="Confirm password " name='confPass' onChange={handleChanges} />
            {/* <Notification message={errMsg} type={errMsg?"error":"success"} />
             */}
            <Notification
                message={errMsg ? errMsg : "Successfully Signed Up"}
                type={errMsg ? "error" : "success"}
            />
            <Button label="Sign Up" validationFormData={validationFormData} />
            </div>

        </div>
    )
}

export default Method2