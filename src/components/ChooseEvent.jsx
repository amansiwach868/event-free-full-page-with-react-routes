import React from 'react'
import { EVENT_CARD_LIST } from '../utils/helper.js';
import CustomButton from './common/CustomButton.jsx';
import calender from '../assets/images/svg/calendar-img.svg';
import location from '../assets/images/svg/location-img.svg';
import member from '../assets/images/svg/people-img.svg';


const ChooseEvent = () => {
    const card = EVENT_CARD_LIST.map((item, index) => (
        <div
            key={index}
            className='pt-[35px] px-10 pb-[30px] rounded-[30px] border flex flex-col items-center justify-center border-[#CCCCCC] hover:shadow-[0px_8px_35px_0px_#0000001A] hover:border-transparent duration-300 group'
        >
            <div className="w-full">
                <img
                    className='max-w-[344px] h-[300px] object-cover w-full mb-[21px] rounded-[20px] group-hover:rounded-[0] duration-300 '
                    src={item.img}
                    alt={`card-img-${index + 1}`}
                />
                <h4 className='xl:text-[24px] md:text-[21px] text-[18px] font-semibold text-nowrap'>{item.title}</h4>
                <div className="flex flex-col gap-[17px] mt-3 mb-8 items-start">
                    <span className='flex gap-2 justify-center items-center'>
                        <img src={calender} alt='calender-icon' />
                        <span className='text-black/60 text-[16px] font-normal'>{item.date}</span>
                    </span>
                    <span className='flex gap-2 justify-center items-center'>
                        <img src={location} alt='location-icon' />
                        <span className='text-black/60 text-[16px] font-normal'>{item.location}</span>
                    </span>
                    <span className='flex gap-2 justify-center items-center'>
                        <img src={member} alt='member-icon' />
                        <span className='text-black/60 text-[16px] font-normal'>{item.member}</span>
                    </span>
                </div>
                <CustomButton>Go Check</CustomButton>
            </div>
        </div>
    ));
    return (
        <div className='pt-[68px] lg:pb-[155px] md:pb-[100px] sm:pb-[70px] pb-[50px]'>
            <div className="max-w-[1320px] w-full mx-auto px-3">
                <div className="flex flex-col justify-center items-center">
                    <svg width="189" height="8" viewBox="0 0 189 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" width="188" height="8" fill="#01C8FF" />
                        <rect width="166" height="8" fill="#2C49FE" />
                    </svg>
                    <h3 className='text-black text-center lg:text-[48px] md:text-[40px] sm:text-[35px] text-[30px] font-bold'>Choose your next event</h3>
                </div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[25px] mt-[33px] w-full justify-center items-center">
                    {card}
                </div>
            </div>
        </div>
    )
}

export default ChooseEvent
