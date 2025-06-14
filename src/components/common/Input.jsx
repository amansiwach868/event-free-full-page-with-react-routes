import React from 'react'

const Input = ({placeholder,inputType}) => {
  return (
    <div>
          <input type={inputType} className=' outline-black py-[9px] px-[17px] text-[16px] text-black/70 border border-[#999999] w-full rounded-[5px]' placeholder={placeholder} />
    </div>
  )
}

export default Input
