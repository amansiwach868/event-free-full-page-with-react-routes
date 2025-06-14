import React from 'react'
import specialImg from "../assets/images/png/special-img.png";
import HeadingPara from './common/HeadingPara';
import { specialCardData } from '../utils/helper.js';

const Special = () => {
    const card = specialCardData.map((item, i) => (
        <div key={i} className="max-lg:w-1/3 lg:w-1/2 max-sm:w-1/2 max-sm:min-w-[260px] px-[15px]">
            <div className='px-5 pt-[45px] pb-[17px] border border-[#2C49FE] hover:bg-[#2C49FE] duration-300 relative rounded-[5px] group'>
                <div className="h-[79px] w-[79px] border border-[#2C49FE] rounded-full flex absolute bg-white z-10 justify-center items-center -top-[40px] left-1/2 -translate-x-1/2">
                    <img className=' pointer-events-none' src={item.img} alt={`special card img`} />
                </div>
                <HeadingPara
                    headingText={item.heading}
                    paraText={item.para}
                    headingClass={' w-full text-[25px] font-medium text-center text-[#2C49FE] group-hover:text-white'}
                    paraClass={' w-full text-[16px] text-center text-[#2C49FE] group-hover:text-white'}
                    editsvg={'hidden'}
                />
            </div>
        </div>
    ));
    return (
        <div className='md:pt-[137px] md:pb-[73px] sm:py-[75px] py-[40px]'>
            <div className="max-w-[1320px] w-full mx-auto px-3 grid lg:grid-cols-2 gap-x-[104px] gap-y-10 grid-cols-1">
                <img className=' pointer-events-none' src={specialImg} alt="specialImg" />
                <div className=" w-full">
                    <HeadingPara headingText={'What make us special ?'} paraText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,"} headingClass={'mt-[21px] mb-[6px] font-bold sm:text-[48px] text-[30px]'} paraClass={'text-[16px] font-normal '} />
                    <div className="flex flex-wrap justify-center items-center flex-row sm:gap-y-10 gap-y-15 lg:max-w-[550px] sm:mt-[46px] mt-15 w-full">
                        {card}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Special
