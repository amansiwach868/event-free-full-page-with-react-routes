import React from 'react'
import HeadingPara from './common/HeadingPara'
import userNameHeroImg from '../assets/images/png/username-hero-img.png'
import { userData } from '../utils/helper.js';
import CustomButton from './common/CustomButton.jsx';
import Header from './common/Header.jsx';
import { NavLink } from 'react-router-dom';

const UserNameHero = () => {
    return (
        <div>
            <Header
                editHeaderLinks={'!text-black'}
                editHeader={'py-[17px] shadow-[0px_8px_35px_0px_#0000000D]'}
                editcross={'!bg-black'}
            />
            <div className="max-w-[1320px] w-full px-3 mx-auto flex flex-col lg:flex-row gap-10 mt-[67px]">
                <img className="w-full max-w-[400px] mx-auto lg:mx-0" src={userNameHeroImg} alt="user img" />
                <div className="w-full">
                    <div className="flex gap-1 text-[16px] text-black/60 mb-2">
                        <NavLink to="/">Home</NavLink>
                        <span>&gt;</span>
                        <NavLink to="/user-name">Username</NavLink>
                    </div>
                    <div className="w-full flex justify-between xl:items-center max-xl:flex-col max-xl:mb-4">
                        <h2 className='text-[32px] sm:text-[48px] font-bold mt-3 mb-4'>
                            Jhon Den
                        </h2>
                        <div className="flex gap-3 max-sm:flex-col">
                            <button className="text-nowrap px-7 py-[11px] rounded-[50px] bg-[#EAEDFF] text-black font-semibold hover:bg-[#01C8FF] duration-300 cursor-pointer">Unshow Journey of Feed</button>
                            <CustomButton
                                children={'Show Journey of Feed'}
                            />
                        </div>
                    </div>

                    <HeadingPara
                        paraText={'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.'}
                        paraClass={'text-[16px] text-black/60 font-normal'}
                        editsvg={'hidden'}
                    />

                    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-y-10 mt-[38px]  ">
                        {
                            userData.map((data, i) => (
                                <div key={i} className="flex gap-2 justify-start items-center opacity-60">
                                    <img src={data.userDataImg} alt="userNameHeroImg" />
                                    <p className='text-[16px] font-normal'>{data.data}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserNameHero
