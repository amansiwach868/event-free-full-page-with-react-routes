import React from 'react'
import HeadingPara from './common/HeadingPara'
import Input from './common/Input'
import ImageJoin from "../assets/images/png/join-us-img.png"
import CustomButton from './common/CustomButton'

const JoinUs = () => {
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
                    <div className='flex flex-col gap-4' >
                        <div className="grid grid-cols-2 gap-4">
                            <Input placeholder={'First Name'} inputType={'text'} />
                            <Input placeholder={'Last Name'} inputType={'text'} />
                        </div>
                        <Input placeholder={'Last Name'} inputType={'email'} />
                        <div className="grid grid-cols-2 gap-4">
                            <Input placeholder={'First Name'} inputType={'text'} />
                            <Input placeholder={'Last Name'} inputType={'text'} />
                        </div>
                        <textarea className='resize-none py-[9px] px-[17px] mb-5 text-[16px] text-black/70 border border-[#999999] w-full rounded-[5px] min-h-[124px] outline-black' placeholder='About Me'></textarea>
                        <CustomButton children={'Sign up'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinUs
