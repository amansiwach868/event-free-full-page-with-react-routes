
import { useEffect, useState } from 'react'
import HeaderImg from '../../assets/images/svg/logo.svg'
import CustomButton from './CustomButton'
import { NavLink } from 'react-router-dom'
const Header = ({ editHeaderLinks, editHeader,editcross }) => {
    const [header, setHeader] = useState(false)
    const toggleHeader = () => {
        setHeader(!header)
    }
    useEffect(() => {
        if (header) {
            document.body.classList.add('max-lg:overflow-hidden')
        }
        else {
            document.body.classList.remove('max-lg:overflow-hidden')
        }
    }, [header])

    return (
        <nav className={`${editHeader}`}>
            <div className={`max-w-[1320px] w-full flex justify-between items-center gap-6 mx-auto px-3 `} >
                <div className="flex gap-[15px]">
                    <a href="#"><img src={HeaderImg} alt="logo" /></a>
                    <a className='flex justify-center items-center' href="#"> <h2 className="flex justify-center items-center lg:text-[36px] sm:text-[30px] text-[24px] font-bold text-[#2C49FE]">Events<span className="text-[#01C8FF]">Free</span></h2></a>
                </div>
                <ul className={`flex lg:max-w-[590px] w-full lg:justify-between items-center max-lg:flex-col gap-y-7 justify-center max-lg:fixed max-lg:top-0 max-lg:bg-[#4b5558] z-50 max-lg:min-h-screen duration-300  ${header ? 'right-0' : '-right-full'}`}>
                    <li><NavLink className={({ isActive }) => `text-base font-semibold duration-300 hover:text-[#01C8FF] ${isActive ? `text-[#01C8FF]` : `text-white ${editHeaderLinks}`}`} onClick={() => setHeader(false)} to="/">HOME</NavLink></li>
                    <li><NavLink className={({ isActive }) => `text-base font-semibold duration-300 hover:text-[#01C8FF] ${isActive ? `text-[#01C8FF]` : `text-white ${editHeaderLinks}`}`} onClick={() => setHeader(false)} to="/events">EVENTS</NavLink></li>
                    <li><NavLink className={({ isActive }) => `text-base font-semibold duration-300 hover:text-[#01C8FF] ${isActive ? `text-[#01C8FF]` : `text-white ${editHeaderLinks}`}`} onClick={() => setHeader(false)} to="/feed">FEED</NavLink></li>
                    <li><NavLink className={({ isActive }) => `text-base font-semibold duration-300 hover:text-[#01C8FF] ${isActive ? `text-[#01C8FF]` : `text-white ${editHeaderLinks}`}`} onClick={() => setHeader(false)} to="/user-name">USER NAME</NavLink></li>
                    <li className='max-lg:hidden'><CustomButton onClick={() => setHeader(false)}>Log Out</CustomButton></li>
                </ul>
                
                <div className="flex gap-2 items-center lg:hidden">
                    <div className="max-sm:hidden lg:hidden"><CustomButton onClick={() => setHeader(false)}>Log Out</CustomButton></div>
                    <div onClick={toggleHeader} className="w-10 h-6 flex flex-col items-center justify-between relative z-[51] lg:hidden">
                        <span className={`w-full h-1 rounded-full bg-white ${editcross} duration-300 ${header ? 'rotate-45 absolute top-1/2 -translate-y-1/2' : ''}`}></span>
                        <span className={`w-full h-1 rounded-full bg-white ${editcross} duration-300 ${header ? 'opacity-0' : ''}`}></span>
                        <span className={`w-full h-1 rounded-full bg-white ${editcross} duration-300 ${header ? '-rotate-45 absolute top-1/2 -translate-y-1/2' : ''}`}></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Header