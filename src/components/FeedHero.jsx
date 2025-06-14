import React from 'react';
import feedHeorimg from '../assets/images/png/feed-hero-img-1.png';
import HeadingPara from './common/HeadingPara';
import { feedCardData } from '../utils/helper.js';
import Header from './common/Header.jsx';
import { NavLink } from 'react-router-dom';

const FeedHero = () => {
    const cards = feedCardData.map((item, i) => (
        <div key={i} className="w-full sm:w-1/2 lg:w-[40%] px-2.5 mb-5">
            <div className="py-3 pr-5 pl-3 shadow-[0px_8px_35px_0px_#0000001A] rounded-[20px] flex gap-3 items-center justify-center">
                <img src={item.img} alt="" className="w-full max-w-[114px]" />
                <div className="min-w-[110px] flex justify-center items-center">
                    <HeadingPara
                        headingText={item.heading}
                        paraText={item.para}
                        headingClass={'text-[16px] font-bold mb-[5px]'}
                        paraClass={'text-[12px] font-normal mb-[5px] text-[#666666]'}
                        editsvg={'hidden'}
                    />
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <Header
                editHeaderLinks={'!text-black'}
                editHeader={'py-[17px] shadow-[0px_8px_35px_0px_#0000000D]'}
                editcross={'!bg-black'}
            />
            <div className="max-w-[1320px] w-full px-3 mx-auto flex flex-col lg:flex-row gap-10 mt-[67px]">
                <img className="w-full max-w-[400px] mx-auto lg:mx-0" src={feedHeorimg} alt="user img" />
                <div className="w-full">
                    <div className="flex gap-1 text-[16px] text-black/60 mb-2">
                        <NavLink to="/">Home</NavLink>
                        <span>&gt;</span>
                        <NavLink to="/feed">Feed</NavLink>
                    </div>

                    <HeadingPara
                        headingText={'Jhone Doe'}
                        paraText={'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.'}
                        headingClass={'text-[32px] sm:text-[48px] font-bold mt-3 mb-4'}
                        paraClass={'text-[16px] text-black/60 font-normal'}
                        editsvg={'hidden'}
                    />

                    <p className="text-[16px] font-semibold text-black/60 mt-[29px] mb-[17px]">Following Events :</p>

                    <div className="flex flex-wrap -mx-2.5">
                        {cards}
                        <div className="w-full sm:w-1/2 lg:w-[20%] px-2.5 mb-5">
                            <div className="bg-[#EAEDFF] w-full h-full rounded-[20px] flex justify-center items-center flex-col text-black/60 py-6">
                                <h2 className="text-[36px] font-semibold">+15</h2>
                                <p className="text-[16px]">more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeedHero;
