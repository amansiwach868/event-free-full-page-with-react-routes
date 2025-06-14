import React from 'react'

const FooterLink = ({ linkName }) => {
  return (
    <li className='sm:text-[12px] text-[8px] font-normal text-white leading-[100%] overflow-x-clip'><a className=' after:h-[1px] after:w-full after:bg-white after:content-[""] relative after:absolute after:bottom-0 after:-left-full hover:after:left-0 after:duration-300 ease-in-out' href="#" target="_blank">{linkName}</a></li>
  )
}

export default FooterLink
