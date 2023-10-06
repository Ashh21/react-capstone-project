import React, { useState } from 'react'
import '../signup/SignUp.css'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState( "")
    const [isChecked, setIsChecked] = useState(false)
    const [error, setError] = useState("")

    const isNameValid = /^[A-Za-z\s]+$/.test(name);
    const isUserNameValid = /^[a-zA-Z0-9_]{3,20}$/.test(userName)
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isMobileValid = /^[6-9]\d{9}$/.test(mobile);
    const navigate = useNavigate();

    const signupHandler = () => {
        const newErrors = {}
        if (!isNameValid) {
            newErrors.name = "Enter a valid name"
        }
        if (!isUserNameValid) {
            newErrors.userName = "Enter a valid userName"
        }
        if (!isEmailValid) {
            newErrors.email = "Email I'd is not valid"
        }
        if (!isMobileValid) {
            newErrors.mobile = "Enter a valid mobile number"
        }
        if (!isChecked) {
            newErrors.check = "Check this box if you want to proceed"
        }
        if (Object.values(newErrors).length === 0) {
            localStorage.setItem("data", JSON.stringify({
                name, userName, email, mobile
            }))
            navigate('/entertainment');
            setError("");
        }

        else {
            setError(newErrors)
        }
    }

    return (
        <div className='container-one'>
            <div className='left-div'>
                <h1>Discover new things on Superapp</h1>
            </div>
            <div className='container-two'>
                <div className='right-div'>
                    <h1>Super app</h1>
                    <p>Create your new account</p>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className='form'>

                    <div className='input-div'>
                        <input className='input' value={name} onChange={(e) => setName(e.target.value)}
                            type='text' placeholder='Name' />
                        <span className='span'>{error.name}</span>
                    </div>

                    <div className='input-div'>
                        <input className='input' value={userName} onChange={(e) => setUserName(e.target.value)}
                            type='text' placeholder='UserName' />
                        <span className='span'>{error.userName}</span>
                    </div>

                    <div className='input-div'>
                        <input className='input' value={email} onChange={(e) => setEmail(e.target.value)}
                            type='text' placeholder='Email' />
                        <span className='span'>{error.email}</span>
                    </div>

                    <div className='input-div'>
                        <input className='input' value={mobile} onChange={(e) => setMobile(e.target.value)}
                            type='number' placeholder='Mobile' />
                        <span className='span'>{error.mobile}</span>
                    </div>

                    <div className='checkbox-div'>
                        <div className='label'>
                            <label>
                                <input className='check' type="checkbox" checked={isChecked}
                                    onChange={() => setIsChecked(!isChecked)}
                                /> Share my resgitration data with Super app
                            </label>
                        </div>
                        <span className='span'>{error.check}</span>
                    </div>


                    <button onClick={signupHandler}
                        className='signup-btn'>SIGN UP</button>

                    <p className='tnc'> By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span> </p>

                    <p className='tnc'>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span> </p>
                </form>
            </div>
        </div>
    )
}

export { SignUp }

