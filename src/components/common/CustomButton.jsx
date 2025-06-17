

const CustomButton = ({ children, onClick ,type}) => {
    return (
        <button type={type} onClick={onClick ? onClick : null} className="text-nowrap px-7 py-[11px] rounded-[50px] font-semibold bg-[#2C49FE] text-white hover:bg-[#01C8FF] duration-300 cursor-pointer">{children}</button>
    )
}
export default CustomButton
