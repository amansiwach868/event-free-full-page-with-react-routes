import React, { useRef, useState } from 'react'
import HeadingPara from './common/HeadingPara'
import ImageJoin from "../assets/images/png/join-us-img.png"
import CustomButton from './common/CustomButton'

const JoinUs = () => {
    const fristNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const comfirmPasswordRef = useRef()

    const [name, setName] = useState(false)
    const [email, setEmail] = useState(false)
    const [conformPassword, setConformPassword] = useState(false)
    const [passwordLength, setPasswordLength] = useState(false)
    const [passwordCaptial, setPasswordCaptial] = useState(false)
    const [passwordSymple, setpasswordSymple] = useState(false)
    const [passwordNumber, setPasswordNumber] = useState(false)

    const checkFristName = () => {
        const fristNameValue = fristNameRef.current.value;

        const nameRegex = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/

        setName(!nameRegex.test(fristNameValue));
    }
    const checkLastName = () => {
        const lastNameValue = lastNameRef.current.value;

        const nameRegex = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/

        setName(!nameRegex.test(lastNameValue));
    }
    const checkEmail = () => {
        const emailValue = emailRef.current.value;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        setEmail(!emailRegex.test(emailValue));
    }


    const conformPasswords = () => {
        const passwordValue = passwordRef.current.value;
        const comfirmPasswordRefPasswordValue = comfirmPasswordRef.current.value;

        setConformPassword(!(comfirmPasswordRefPasswordValue === passwordValue));
    }

    const checkPasswordStrength = () => {
        const passwordValue = passwordRef.current.value;

        const passwordRegexLength = /^(?=.{8,})/;
        const passwordRegexCapital = /^(?=.*[A-Z])/;
        const passwordRegexSymbol = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/;
        const passwordRegexNumber = /^(?=(?:.*\d){2,})/;

        setPasswordLength(!passwordRegexLength.test(passwordValue));
        setPasswordCaptial(!passwordRegexCapital.test(passwordValue));
        setpasswordSymple(!passwordRegexSymbol.test(passwordValue));
        setPasswordNumber(!passwordRegexNumber.test(passwordValue));
    };


    return (
        <div>
            <div className="max-w-[1320px] w-full mx-auto px-3 grid md:grid-cols-2 sm:pb-[90px] pb-[50px] gap-10">
                <img src={ImageJoin} alt=" join us img" className='m-auto' />
                <div className="">
                    <HeadingPara
                        headingText={'Join Us !'}
                        paraText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue '}
                        headingClass={'sm:text-[48px] text-[40px] font-bold mt-[9px] mb-[5px]'}
                        paraClass={'max-w-[543px] w-full text-[16px] mb-[15px]'}
                    />
                    <h2 className='text-[35px] font-bold mb-[14px]'>Sign Up</h2>
                    <form className='flex flex-col gap-4' >
                        <div className="grid grid-cols-2 gap-4">
                            <input onChange={checkFristName} required className=' outline-black py-[9px] px-[17px] text-[16px] text-black/70 border border-[#999999] w-full rounded-[5px]' ref={fristNameRef} placeholder='First Name' type='text' />
                            <input onChange={checkLastName} required className=' outline-black py-[9px] px-[17px] text-[16px] text-black/70 border border-[#999999] w-full rounded-[5px]' ref={lastNameRef} placeholder='Last Name' type='text' />
                            {name && <li className="text-red-500">Please enter a valid name 'letters only, no numbers or symbols'</li>}
                        </div>
                        <input onChange={checkEmail} required className=' outline-black py-[9px] px-[17px] text-[16px] text-black/70 border border-[#999999] w-full rounded-[5px]' ref={emailRef} placeholder='Email' type='email' />
                        {email && <li className="text-red-500">Please enter a valid email address</li>}
                        <div className="grid grid-cols-2 gap-4">
                            <input required onChange={checkPasswordStrength} className=' outline-black py-[9px] px-[17px] text-[16px] text-black/70 border border-[#999999] w-full rounded-[5px]' ref={passwordRef} placeholder='Password' type='password' />
                            <input required onChange={conformPasswords} className=' outline-black py-[9px] px-[17px] text-[16px] text-black/70 border border-[#999999] w-full rounded-[5px]' ref={comfirmPasswordRef} placeholder='Confirm Password' type='password' />
                            <ul className="flex gap-1 flex-col pl-4 list-disc">
                                {passwordLength && <li className="text-red-500">Password must be at least 8 characters long.</li>}
                                {passwordCaptial && <li className="text-red-500">Password must contain at least one capital letter.</li>}
                                {passwordSymple && <li className="text-red-500">Password must contain at least one special character.</li>}
                                {passwordNumber && <li className="text-red-500">Password must contain at least two numbers.</li>}
                                {conformPassword && <li className="text-red-500">Password not match.</li>}
                            </ul>
                        </div>
                        <textarea required className='resize-none py-[9px] px-[17px] mb-5 text-[16px] text-black/70 border border-[#999999] w-full rounded-[5px] min-h-[124px] outline-black' placeholder='About Me'></textarea>
                        <CustomButton type={'submit'} children={'Sign up'} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default JoinUs
