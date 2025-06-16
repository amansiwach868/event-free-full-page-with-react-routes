import React, { useState } from 'react';
import CustomButton from './common/CustomButton';
import commenterImg from '../assets/images/png/commenter-img-1.png';
import { tellUsCommentData } from '../utils/helper.js';

const TellUs = () => {
    const [comments, setComments] = useState(tellUsCommentData);
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        const trimmedComment = newComment.trim();
        if (!trimmedComment) return;

        const commentToAdd = {
            commentUserImg: commenterImg,
            commentUsername: 'You',
            comment: trimmedComment,
        };

        setComments([commentToAdd, ...comments]);
        setNewComment('');
    };

    const handleRemoveComment = (indexToRemove) => {
        const updatedComments = comments.filter((_, index) => index !== indexToRemove);
        setComments(updatedComments);
    };

    return (
        <section className="pb-[118px]">
            <div className="container mx-auto flex flex-col items-center justify-center px-4">
                <svg width="115" height="8" viewBox="0 0 115 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.609375" width="114.392" height="8" fill="#01C8FF" />
                    <rect width="101.005" height="8" fill="#2C49FE" />
                </svg>
                <h1 className="text-[35px] font-semibold mt-2 sm:text-[43px] md:text-[46px] lg:text-[48px]">Tell Us!</h1>
                <p className="text-base font-normal text-gray-900 text-center w-full max-w-3xl mt-2 opacity-60">
                    Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.
                </p>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleAddComment();
                }} className="w-full border-[#9CA0BE] border rounded-[35px] p-[7px] flex max-sm:flex-col gap-y-5 my-12">
                    <img className='min-w-[55px] max-w-[55px] h-[55px] rounded-full mx-auto' src={commenterImg} alt="commenterImg" />
                    <input
                        type="text"
                        required
                        placeholder='Write your comment here...'
                        className='w-full sm:mx-[21px] outline-0 max-sm:text-center text-[15px] sm:text-[20px] font-normal'
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <CustomButton onClick={handleAddComment} >
                        Post Comment
                    </CustomButton>
                </form>
                <div className="flex flex-col gap-6">
                    {comments.map((commentData, i) => (
                        <div key={i} className="flex max-sm:flex-col items-start gap-5">
                            <img className='min-w-[55px] h-[55px] rounded-full' src={commentData.commentUserImg} alt="commentUserImg" />
                            <div className="w-full">
                                <div className="w-full bg-[#F1F1F5] p-5 rounded-tr-[20px] rounded-b-[20px]">
                                    <h2 className='text-[15px] sm:text-[20px] font-semibold'>{commentData.commentUsername}</h2>
                                    <p className='sm:text-[16px] text-[14px] font-normal opacity-60 mt-2.5'>{commentData.comment}</p>
                                </div>
                                <div className="flex gap-[5px] mt-2 cursor-pointer" onClick={() => handleRemoveComment(i)}>
                                    <svg className='opacity-60' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5 5C19.5 5.24493 19.41 5.48134 19.2473 5.66437C19.0845 5.84741 18.8603 5.96434 18.617 5.993L18.5 6H17.655L16.424 18.52C16.357 19.1994 16.0397 19.8295 15.5338 20.2879C15.0279 20.7462 14.3697 21.0001 13.687 21H6.313C5.63035 21.0001 4.97207 20.7462 4.4662 20.2879C3.96033 19.8295 3.64302 19.1994 3.576 18.52L2.345 6H1.5C1.23478 6 0.98043 5.89464 0.792893 5.70711C0.605357 5.51957 0.5 5.26522 0.5 5C0.5 4.73478 0.605357 4.48043 0.792893 4.29289C0.98043 4.10536 1.23478 4 1.5 4H6.5C6.5 3.54037 6.59053 3.08525 6.76642 2.66061C6.94231 2.23597 7.20012 1.85013 7.52513 1.52513C7.85013 1.20012 8.23597 0.942313 8.66061 0.766422C9.08525 0.59053 9.54037 0.5 10 0.5C10.4596 0.5 10.9148 0.59053 11.3394 0.766422C11.764 0.942313 12.1499 1.20012 12.4749 1.52513C12.7999 1.85013 13.0577 2.23597 13.2336 2.66061C13.4095 3.08525 13.5 3.54037 13.5 4H18.5C18.7652 4 19.0196 4.10536 19.2071 4.29289C19.3946 4.48043 19.5 4.73478 19.5 5ZM12.25 8.25C12.0688 8.25001 11.8937 8.31564 11.7571 8.43477C11.6205 8.55389 11.5316 8.71845 11.507 8.898L11.5 9V16L11.507 16.102C11.5317 16.2815 11.6206 16.446 11.7571 16.5651C11.8937 16.6842 12.0688 16.7498 12.25 16.7498C12.4312 16.7498 12.6063 16.6842 12.7429 16.5651C12.8794 16.446 12.9683 16.2815 12.993 16.102L13 16V9L12.993 8.898C12.9684 8.71845 12.8795 8.55389 12.7429 8.43477C12.6063 8.31564 12.4312 8.25001 12.25 8.25ZM7.75 8.25C7.56876 8.25001 7.39366 8.31564 7.25707 8.43477C7.12048 8.55389 7.03165 8.71845 7.007 8.898L7 9V16L7.007 16.102C7.0317 16.2815 7.12055 16.446 7.25714 16.5651C7.39372 16.6842 7.5688 16.7498 7.75 16.7498C7.9312 16.7498 8.10628 16.6842 8.24286 16.5651C8.37945 16.446 8.4683 16.2815 8.493 16.102L8.5 16V9L8.493 8.898C8.46835 8.71845 8.37952 8.55389 8.24293 8.43477C8.10634 8.31564 7.93124 8.25001 7.75 8.25ZM10 2.5C9.60218 2.5 9.22064 2.65804 8.93934 2.93934C8.65804 3.22064 8.5 3.60218 8.5 4H11.5C11.5 3.60218 11.342 3.22064 11.0607 2.93934C10.7794 2.65804 10.3978 2.5 10 2.5Z" fill="black" />
                                    </svg>
                                    <span className='sm:text-[16px] text-[14px] font-normal text-[#666666]'>Remove Comment</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TellUs;
