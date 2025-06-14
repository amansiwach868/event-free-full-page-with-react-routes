import React from 'react'
import HeadingPara from './common/HeadingPara'
import { exploreCardData } from '../utils/helper.js';

const ExploreEvents = () => {
  const card = exploreCardData.map((item, i) => (
    <div key={i} className="px-3 pt-[10px] pb-[24px] hover:shadow-[2px_9px_32px_0px_#0000000F] duration-300 min-w-[250px] mx-auto cursor-pointer">
      <img className='pointer-events-none mb-3' src={item.img} alt={`explore card img`} />
      <span className='text-[14px] text-black/70'>{item.date}</span>
      <HeadingPara
        headingText={item.heading}
        paraText={item.para}
        headingClass={' w-full text-[24px] font-medium mb-[5px]'}
        paraClass={' w-full text-[16px] text-black/70 max-w-[270px]'}
        editsvg={'hidden'}
      />
    </div>
  ));
  return (
    <div>
      <div className="max-w-[1320px] w-full px-3 mx-auto md:pt-[122px] md:pb-[163px] sm:py-[70px] py-[50px]   grid lg:grid-cols-2 gap-y-10">
        <div className="flex flex-col justify-center items-center">
          <HeadingPara
            headingText={'Explore our latest events'}
            paraText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu.'}
            headingClass={'sm:text-[48px] text-[40px] font-bold mt-[9px] mb-[12px] w-full leading-[130%] lg:max-w-[338px] w-full'}
            paraClass={'w-full text-[16px] lg:max-w-[543px] w-full '}
          />
       </div>
        <div className="grid sm:grid-cols-2 gap-[31px]">
          {card}
        </div>
      </div>
    </div>
  )
}

export default ExploreEvents
