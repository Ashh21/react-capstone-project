import React from 'react'
import '../signup/SignUp.css'

const SignUp = () => {
    return (
        <div className='container-one'>
            <div className='left'>
                <h1>Discover new things on Superapp</h1>
            </div>
            <div className='container-two'>
                <div>
                    <h1>Super app</h1>
                    <p>Create your new account</p>
                </div>
                <div className='input-div'>
                    <input type='text' placeholder='Name' />
                    <input type='text' placeholder='UserName' />
                    <input type='text' placeholder='Email' />
                    <input type='number' placeholder='Mobile' />
                    <label>
                        <input type="checkbox" />
                        Share my resgitration data with Super app
                    </label>

                    <button className='signup-btn'>SIGN UP</button>

                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export { SignUp }