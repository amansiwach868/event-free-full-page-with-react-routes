import Header from "../components/common/Header"

const NotFound = () => {
    return (
        <>
            <Header
                editHeaderLinks={'!text-black'}
                editHeader={'py-[17px] shadow-[0px_8px_35px_0px_#0000000D]'}
                editcross={'!bg-black'}
            />
            <div className="h-[50vh] bg-black text-4xl font-medium text-white p-4 text-center">
                NotFound
            </div>
        </>
    )
}

export default NotFound
