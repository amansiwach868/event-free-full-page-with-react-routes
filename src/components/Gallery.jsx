import React from 'react';
import { GELLARY_DATA } from '../utils/helper';

const Gallery = () => {
    const styles = [
        'col-start-1 col-end-2 row-start-1 row-end-2',
        'col-start-2 col-end-3 row-start-1 row-end-2',
        'col-start-3 col-end-4 row-start-1 row-end-3',
        'col-start-1 col-end-3 row-start-2 row-end-3',
        'col-start-1 col-end-2 row-start-3 row-end-4',
        'col-start-2 col-end-4 row-start-3 row-end-4'
    ];
    return (
        <section className="pt-[55px] pb-[67px]">
            <div className="container mx-auto w-full flex flex-col items-center justify-center px-4">
                <svg width="115" height="8" viewBox="0 0 115 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.609375" width="114.392" height="8" fill="#01C8FF" />
                    <rect width="101.005" height="8" fill="#2C49FE" />
                </svg>
                <h1 className="text-[35px] font-semibold mt-2 sm:text-[43px] md:text-[46px] lg:text-[48px]">Gallery</h1>
                <div className="grid grid-cols-3 grid-rows-3 md:gap-6 sm:gap-4 gap-2 mt-[77px]">
                    {GELLARY_DATA.map(function (image, i) {
                        return <div key={i} className={styles[i]}>
                            <img className='object-cover h-full w-full md:rounded-[30px] sm:rounded-[20px] rounded-[10px]'  src={image} alt={image} />
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
};

export default Gallery;