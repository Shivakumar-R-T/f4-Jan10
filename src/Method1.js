import React, { useState ,useEffect} from 'react'

import * as EmailValidator from 'email-validator';

const Method1 = () => {
    const [formData, setformData] = useState({
        fulllname: "",
        email: "",
        password: "",
        confPass: ""
    })
    const [errMsg, setErrmsg] = useState("All Feilds are mandatory");

    const handleChanges=(event)=>{
        const {name,value}=event.target;
        const updates={...formData};
        updates[name]=value;
        setformData(updates);

    }
    // useEffect(()=>{
    //     validateForm();
    // },[formData.fulllname,formData.email,formData.password,formData.confPass])


    const validateForm=()=>{
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
        <div>
            <input type='text' value={formData.fulllname} placeholder="Enter your fullname "  name='fulllname' onChange={handleChanges}/>
            <input type='email' value={formData.email} placeholder="Enter your Email"  name='email'onChange={handleChanges}/>
            <input type='text' value={formData.password} placeholder="Enter password "  name='password' onChange={handleChanges}/>
            <input type='text' value={formData.confPass} placeholder="Confirm password "  name='confPass' onChange={handleChanges}/>
            <div>
                {(errMsg)?<div className='Error'>{errMsg} </div>: <div className='success'>Successfully Logged In</div>}
                </div>
            <button onClick={validateForm}>Sign Up</button>
        </div>

    )
}

export default Method1