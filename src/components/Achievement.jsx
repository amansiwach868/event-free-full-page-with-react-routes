import React from 'react'
import HeadingPara from './common/HeadingPara'
import { achievementCardData } from '../utils/helper.js';

const Achievement = () => {
    const card = achievementCardData.map((item, i) => (
        <div key={i} className="flex flex-col justify-center items-center gap-[3px]">
            <img src={item.img} alt={`achievement card img`} />
            <HeadingPara
                headingText={item.heading}
                paraText={item.para}
                headingClass={' w-full text-[35px] font-bold text-center text-white'}
                paraClass={' w-full text-[18px] text-center text-white'}
                editsvg={'hidden'}
            />
        </div>
    ));
    return (
        <div className='bg-[url(./assets/images/png/achievement-bg-img.png)] bg-center bg-cover bg-no-repeat py-[48px]'>
            <div className="max-w-[920px] w-full px-3 mx-auto">
                <HeadingPara
                    headingText={'Lorem ipsum dolor sit amet, consectetur'}
                    paraText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec'}
                    headingClass={' w-full sm:text-[48px] text-[40px] font-bold text-center max-w-[765px] w-full mx-auto leading-[130%] text-white'}
                    paraClass={' w-full text-[16px] text-center text-white max-w-[765px] w-full mx-auto mt-10 mb-[78px]'}
                    editsvg={'hidden'}
                />
                <div className="grid sm:grid-cols-4 grid-cols-2 gap-y-10">
                    {card}
                </div>
            </div>
        </div>
    )
}

export default Achievement