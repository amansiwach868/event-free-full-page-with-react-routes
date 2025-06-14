import HeadingPara from './common/HeadingPara'
import calanderImg from '../assets/images/svg/calendar-img.svg'
import commenterImg from '../assets/images/png/commenter-img-1.png';
import { feedUserData } from '../utils/helper.js';
import { commentData } from '../utils/helper.js';
import CustomButton from './common/CustomButton.jsx';
import { useState } from 'react';

const NewPosts = () => {
    const [dropdown, setdropdown] = useState(null);

    const toggleDropdown = (i) => {
        setdropdown(dropdown === i ? null : i);
    }
    

    const posts = feedUserData.map((data, i) => (
        <div key={i} className="p-[35px] rounded-[30px] shadow-[0px_8px_35px_0px_#0000001A]">
            <div className="grid xl:grid-cols-2">
                <div className="w-full xl:pr-[66px]">
                    <div className="flex gap-[23px] justify-center items-center">
                        <img className='min-w-[80px] h-[80px] rounded-full' src={data.userImg} alt="userImg" />
                        <div className="w-full">
                            <h4 className='sm:text-[24px] text-[20px] font-semibold'>{data.userName}</h4>
                            <p className='sm:text-[16px] text-[14px] text-[#666666] font-normal'>{data.postEventName}</p>
                        </div>
                    </div>
                    <div className="w-full mt-[45px]">
                        <h3 className='sm:text-[24px] text-[20px] font-semibold'>{data.postTitle}</h3>
                        <div className="flex gap-2 items-center mt-2">
                            <img src={calanderImg} alt="calanderImg" />
                            <p className='sm:text-[16px] text-[14px] text-[#666666] font-normal'>{data.postDate}</p>
                        </div>
                        <p className='sm:text-[16px] text-[14px] text-[#666666] font-normal mt-5'>{data.postDiscretion}</p>
                        <p className='sm:text-[16px] text-[14px] text-[#666666] mt-[13px] font-normal'>{data.postDiscretion2}</p>
                    </div>
                    <div className="flex gap-10 items-center mt-[26px] max-xl:hidden">
                        <div className="flex gap-2.5">
                            <svg className='cursor-pointer hover:scale-110 hover:fill-red-500 duration-300' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 4C4.4625 4 2 6.4625 2 9.5C2 15 8.5 20 12 21.163C15.5 20 22 15 22 9.5C22 6.4625 19.5375 4 16.5 4C14.64 4 12.995 4.9235 12 6.337C11.4928 5.6146 10.8191 5.02505 10.0358 4.61824C9.25245 4.21144 8.38265 3.99938 7.5 4Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className='cursor-pointer sm:text-[16px] text-[14px] text-[#666666] font-normal'>{data.postlikes}</p>
                        </div>
                        <div className="flex gap-2.5">
                            <svg onClick={() => toggleDropdown(i)} className='cursor-pointer' width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.75018 8.75C5.92049 8.75 5.25018 9.42031 5.25018 10.25C5.25018 11.0797 5.92049 11.75 6.75018 11.75C7.57987 11.75 8.25018 11.0797 8.25018 10.25C8.25018 9.42031 7.57987 8.75 6.75018 8.75ZM12.0002 8.75C11.1705 8.75 10.5002 9.42031 10.5002 10.25C10.5002 11.0797 11.1705 11.75 12.0002 11.75C12.8299 11.75 13.5002 11.0797 13.5002 10.25C13.5002 9.42031 12.8299 8.75 12.0002 8.75ZM17.2502 8.75C16.4205 8.75 15.7502 9.42031 15.7502 10.25C15.7502 11.0797 16.4205 11.75 17.2502 11.75C18.0799 11.75 18.7502 11.0797 18.7502 10.25C18.7502 9.42031 18.0799 8.75 17.2502 8.75ZM12.0002 0.5C5.37206 0.5 0.000181322 4.86406 0.000181322 10.25C0.000181322 12.4812 0.932994 14.525 2.47987 16.1703C1.78143 18.0172 0.328306 19.5828 0.304869 19.6016C-0.00450618 19.9297 -0.0888812 20.4078 0.0892438 20.8203C0.267369 21.2328 0.675181 21.5 1.12518 21.5C4.00799 21.5 6.28143 20.2953 7.64549 19.3297C9.00018 19.7563 10.4627 20 12.0002 20C18.6283 20 24.0002 15.6359 24.0002 10.25C24.0002 4.86406 18.6283 0.5 12.0002 0.5ZM12.0002 17.75C10.7486 17.75 9.51112 17.5578 8.32518 17.1828L7.26112 16.8453L6.34706 17.4922C5.67674 17.9656 4.75799 18.4953 3.65174 18.8516C3.99393 18.2844 4.32674 17.6469 4.58456 16.9672L5.08143 15.65L4.11581 14.6281C3.26737 13.7234 2.25018 12.2281 2.25018 10.25C2.25018 6.11563 6.62362 2.75 12.0002 2.75C17.3767 2.75 21.7502 6.11563 21.7502 10.25C21.7502 14.3844 17.3767 17.75 12.0002 17.75Z" fill="black" />
                            </svg>
                            <p className='cursor-pointer sm:text-[16px] text-[14px] text-[#666666] font-normal'>{data.postcomments}</p>
                        </div>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-x-[28px] max-xl:gap-[28px] max-w-[632px] mt-10">
                    <img className='object-cover w-full h-full rounded-[20px] sm:max-w-[302px]' src={data.postImage1} alt="postImage1" />
                    <img className='object-cover w-full max-xl:h-full xl:min-h-[195px] rounded-[20px] sm:max-w-[302px]' src={data.postImage2} alt="postImage2" />
                    <img className='object-cover w-full max-xl:h-full mt-auto rounded-[20px] xl:min-h-[195px] sm:max-w-[302px]' src={data.postImage3} alt="postImage3" />
                    <div className="relative min-h-[236px]">
                        <img className='object-cover w-full h-full rounded-[20px] absolute top-0 left-0 sm:max-w-[302px]' src={data.postImage4} alt="postImage4" />
                        <a className='absolute z-10 py-2.5 px-5 bg-white rounded-[20px] bottom-2.5 right-2.5 hover:scale-110 duration-300' href="#">
                            <h2 className="text-[36px] font-semibold text-[#666666]">+15</h2>
                            <p className="sm:text-[16px] text-[14px] text-[#666666] text-center">more</p>
                        </a>
                    </div>
                </div>
                <div className="flex gap-10 items-center mt-[26px] xl:hidden">
                    <div className="flex gap-2.5">
                        <svg className='cursor-pointer hover:scale-110 hover:fill-red-500 duration-300' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 4C4.4625 4 2 6.4625 2 9.5C2 15 8.5 20 12 21.163C15.5 20 22 15 22 9.5C22 6.4625 19.5375 4 16.5 4C14.64 4 12.995 4.9235 12 6.337C11.4928 5.6146 10.8191 5.02505 10.0358 4.61824C9.25245 4.21144 8.38265 3.99938 7.5 4Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className='cursor-pointer sm:text-[16px] text-[14px] text-[#666666] font-normal'>{data.postlikes}</p>
                    </div>
                    <div className="flex gap-2.5">
                        <svg onClick={() => toggleDropdown(i)} className='cursor-pointer' width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.75018 8.75C5.92049 8.75 5.25018 9.42031 5.25018 10.25C5.25018 11.0797 5.92049 11.75 6.75018 11.75C7.57987 11.75 8.25018 11.0797 8.25018 10.25C8.25018 9.42031 7.57987 8.75 6.75018 8.75ZM12.0002 8.75C11.1705 8.75 10.5002 9.42031 10.5002 10.25C10.5002 11.0797 11.1705 11.75 12.0002 11.75C12.8299 11.75 13.5002 11.0797 13.5002 10.25C13.5002 9.42031 12.8299 8.75 12.0002 8.75ZM17.2502 8.75C16.4205 8.75 15.7502 9.42031 15.7502 10.25C15.7502 11.0797 16.4205 11.75 17.2502 11.75C18.0799 11.75 18.7502 11.0797 18.7502 10.25C18.7502 9.42031 18.0799 8.75 17.2502 8.75ZM12.0002 0.5C5.37206 0.5 0.000181322 4.86406 0.000181322 10.25C0.000181322 12.4812 0.932994 14.525 2.47987 16.1703C1.78143 18.0172 0.328306 19.5828 0.304869 19.6016C-0.00450618 19.9297 -0.0888812 20.4078 0.0892438 20.8203C0.267369 21.2328 0.675181 21.5 1.12518 21.5C4.00799 21.5 6.28143 20.2953 7.64549 19.3297C9.00018 19.7563 10.4627 20 12.0002 20C18.6283 20 24.0002 15.6359 24.0002 10.25C24.0002 4.86406 18.6283 0.5 12.0002 0.5ZM12.0002 17.75C10.7486 17.75 9.51112 17.5578 8.32518 17.1828L7.26112 16.8453L6.34706 17.4922C5.67674 17.9656 4.75799 18.4953 3.65174 18.8516C3.99393 18.2844 4.32674 17.6469 4.58456 16.9672L5.08143 15.65L4.11581 14.6281C3.26737 13.7234 2.25018 12.2281 2.25018 10.25C2.25018 6.11563 6.62362 2.75 12.0002 2.75C17.3767 2.75 21.7502 6.11563 21.7502 10.25C21.7502 14.3844 17.3767 17.75 12.0002 17.75Z" fill="black" />
                        </svg>
                        <p className='cursor-pointer sm:text-[16px] text-[14px] text-[#666666] font-normal'>{data.postcomments}</p>
                    </div>
                </div>
            </div>
            <div className="w-full border border-[#CCCCCC] mt-[33px]"></div>
            <div className={`grid duration-300 ${dropdown === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} overflow-hidden mt-[26px]`}>
                <div className="overflow-hidden">
                    <div className="w-full border-[#9CA0BE] border rounded-[35px] p-[7px] flex max-sm:flex-col gap-y-5">
                        <img className='min-w-[55px] max-w-[55px] h-[55px] rounded-full mx-auto' src={commenterImg} alt="commenterImg" />
                        <input type="text" placeholder='Write your comment here...' className='w-full sm:mx-[21px] outline-0 max-sm:text-center text-[15px] sm:text-[20px] font-normal' />
                        <CustomButton
                            children={'Post Comment'}
                        />
                    </div>
                    <div className="flex gap-6 flex-col w-full mt-[34px]">
                        {
                            commentData.map((commantData, i) => (
                                <div key={i} className="flex max-sm:flex-col items-start gap-5">
                                    <img className='min-w-[55px] h-[55px] rounded-full' src={commantData.commentUserImg} alt="commentUserImg" />
                                    <div className="w-full">
                                        <div className="w-full bg-[#F1F1F5] p-5 rounded-tr-[20px] rounded-b-[20px]">
                                            <h2 className='text-[15px] sm:text-[20px] font-semibold'>{commantData.commentUsername}</h2>
                                            <p className='sm:text-[16px] text-[14px] font-normal opacity-60 mt-2.5'>{commantData.comment}</p>
                                        </div>
                                        <div className="flex gap-[5px] mt-2 ">
                                            <svg className='opacity-60' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.5 5C19.5 5.24493 19.41 5.48134 19.2473 5.66437C19.0845 5.84741 18.8603 5.96434 18.617 5.993L18.5 6H17.655L16.424 18.52C16.357 19.1994 16.0397 19.8295 15.5338 20.2879C15.0279 20.7462 14.3697 21.0001 13.687 21H6.313C5.63035 21.0001 4.97207 20.7462 4.4662 20.2879C3.96033 19.8295 3.64302 19.1994 3.576 18.52L2.345 6H1.5C1.23478 6 0.98043 5.89464 0.792893 5.70711C0.605357 5.51957 0.5 5.26522 0.5 5C0.5 4.73478 0.605357 4.48043 0.792893 4.29289C0.98043 4.10536 1.23478 4 1.5 4H6.5C6.5 3.54037 6.59053 3.08525 6.76642 2.66061C6.94231 2.23597 7.20012 1.85013 7.52513 1.52513C7.85013 1.20012 8.23597 0.942313 8.66061 0.766422C9.08525 0.59053 9.54037 0.5 10 0.5C10.4596 0.5 10.9148 0.59053 11.3394 0.766422C11.764 0.942313 12.1499 1.20012 12.4749 1.52513C12.7999 1.85013 13.0577 2.23597 13.2336 2.66061C13.4095 3.08525 13.5 3.54037 13.5 4H18.5C18.7652 4 19.0196 4.10536 19.2071 4.29289C19.3946 4.48043 19.5 4.73478 19.5 5ZM12.25 8.25C12.0688 8.25001 11.8937 8.31564 11.7571 8.43477C11.6205 8.55389 11.5316 8.71845 11.507 8.898L11.5 9V16L11.507 16.102C11.5317 16.2815 11.6206 16.446 11.7571 16.5651C11.8937 16.6842 12.0688 16.7498 12.25 16.7498C12.4312 16.7498 12.6063 16.6842 12.7429 16.5651C12.8794 16.446 12.9683 16.2815 12.993 16.102L13 16V9L12.993 8.898C12.9684 8.71845 12.8795 8.55389 12.7429 8.43477C12.6063 8.31564 12.4312 8.25001 12.25 8.25ZM7.75 8.25C7.56876 8.25001 7.39366 8.31564 7.25707 8.43477C7.12048 8.55389 7.03165 8.71845 7.007 8.898L7 9V16L7.007 16.102C7.0317 16.2815 7.12055 16.446 7.25714 16.5651C7.39372 16.6842 7.5688 16.7498 7.75 16.7498C7.9312 16.7498 8.10628 16.6842 8.24286 16.5651C8.37945 16.446 8.4683 16.2815 8.493 16.102L8.5 16V9L8.493 8.898C8.46835 8.71845 8.37952 8.55389 8.24293 8.43477C8.10634 8.31564 7.93124 8.25001 7.75 8.25ZM10 2.5C9.60218 2.5 9.22064 2.65804 8.93934 2.93934C8.65804 3.22064 8.5 3.60218 8.5 4H11.5C11.5 3.60218 11.342 3.22064 11.0607 2.93934C10.7794 2.65804 10.3978 2.5 10 2.5Z" fill="black" />
                                            </svg>
                                            <span className='sm:text-[16px] text-[14px] font-normal text-[#666666]'>Remove Comment</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    ))
    return (
        <div>
            <div className="max-w-[1320px] px-3 mx-auto mt-20 md:pb-[107px] sm:pb-[70px] pb-[40px]">
                <HeadingPara
                    headingText={'New Posts'}
                    headingClass={'lg:text-[48px] md:text-[40px] sm:text-[35px] text-[30px] font-semibold'}
                    paraClass={'hidden'}
                />
                <div className="flex gap-[45px] flex-col mt-[30px]">
                    {posts}
                </div>
            </div>
        </div>
    )
}

export default NewPosts
