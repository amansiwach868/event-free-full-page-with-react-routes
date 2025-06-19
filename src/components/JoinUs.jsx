import React, { useRef, useState } from 'react'
import HeadingPara from './common/HeadingPara'
import ImageJoin from "../assets/images/png/join-us-img.png"
import CustomButton from './common/CustomButton'
import CustomInput from './common/CustomInput'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../utils/regex'
import emailjs from '@emailjs/browser';
const JoinUs = () => {
    const formRef = useRef();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        aboutMe: "",
    })
    const [isLoading,setIsLoading]= useState(false)
    const [formError, setFormError] = useState(false)

    const updateField = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    }

    const onSubmitJoinUs = async (e) => {
        e.preventDefault();

        const requiredFields = ['firstName', 'lastName', 'email', 'password', 'confirmPassword'];
        let hasError = false;

        for (let field of requiredFields) {
            if (!formData[field]?.trim()) {
                hasError = true;
                break;
            }
        }

        if (!EMAIL_REGEX.test(formData.email)) {
            hasError = true;
        }


        if (!PASSWORD_REGEX.test(formData.password)) {
            hasError = true;
        }

        if (formData.password !== formData.confirmPassword) {
            hasError = true;
        }

        if (hasError) {
            setFormError(true);
            toast.error("Please fill all required fields correctly.");
            return;
        }

        setFormError(false);
        setIsLoading(true)
     await   emailjs.sendForm('service_sra0er5', 'template_plrnoxf', formRef.current, {
            publicKey: 'ioUEMxPiL6a-fNPDl',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error);
                },
        );
        setIsLoading(false)
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            aboutMe: "", 
        })
        toast.success("Form submitted successfully!");
    };


    return (


        <div>
            <ToastContainer position="top-right" autoClose={3000} />
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
                    <form ref={formRef} onSubmit={(e) => onSubmitJoinUs(e)} className='flex flex-col gap-4' >
                        <div className="grid grid-cols-2 gap-4">
                            <CustomInput label="First Name"
                                id="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={(e) => updateField('firstName', e.target.value)}
                                inputError={formError && !formData.firstName}
                                errorText="First name is required" />
                            <CustomInput label="Last Name"
                                id="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={(e) => updateField('lastName', e.target.value)}
                                inputError={formError && !formData.lastName}
                                errorText="Last name is required" />

                        </div>
                        <CustomInput label="Email"
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateField('email', e.target.value)}
                            inputError={formError && !EMAIL_REGEX.test(formData.email)}

                            errorText="Please enter a valid email address" />

                        <div className="grid grid-cols-2 gap-4">
                            <CustomInput label="Password"
                                id="password"
                                type="password"
                                value={formData.password}
                                onChange={(e) => updateField('password', e.target.value)}
                                inputError={
                                    formError &&
                                    !PASSWORD_REGEX.test(formData.password)
                                }
                                errorText="Password must be 8+ chars, 1 capital, 1 number, 1 symbol" />
                            <CustomInput label="Confirm Password"
                                id="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={(e) => updateField('confirmPassword', e.target.value)}
                                inputError={formError && (formData.password !== formData.confirmPassword || !formData.confirmPassword)}
                                errorText="Password is not match" />

                        </div>
                        <textarea name='aboutMe' value={formData.aboutMe} id='aboutMe' onChange={(e) => updateField('aboutMe', e.target.value)} className='resize-none py-[9px] px-[17px] mb-5 text-[16px] text-black/70 border border-[#999999] w-full rounded-[5px] min-h-[124px] outline-black' placeholder='About Me'></textarea>
                        <CustomButton type={'submit'}>
                            {isLoading? 'Loading...':'Submit'}
                        </CustomButton>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default JoinUs
