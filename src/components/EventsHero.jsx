import React from 'react'
import Header from './common/Header'
import { NavLink } from 'react-router-dom'

const EventsHero = () => {
    return (
        <>

            <div className="min-h-[372px] w-full relative bg-[url(./assets/images/png/events-hero-bg-img.png)] bg-center bg-cover bg-no-repeat pt-[17px]">
                <Header />
                <div className="max-w-[1320px] w-full px-3 mx-auto mt-[131px]">
                    <div className="flex gap-1 text-[16px] text-white mb-2">
                        <NavLink to="/">Home</NavLink>
                        <span>&gt;</span>
                        <NavLink to="/events">Events</NavLink>
                    </div>
                    <h1 className='lg:text-[64px] md:text-[60px] sm:text-[55px] text-[50px] font-semibold text-white mb-0 ps-0 -mt-3'>Events</h1>
                </div>
            </div>
        </>
    )
}

export default EventsHero
