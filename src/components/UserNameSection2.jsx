import React from 'react';
import UserNameSection2Img1 from '../assets/images/png/UserNameSection2-img-2.png';
import UserNameSection2Img2 from '../assets/images/png/UserNameSection2-img-1.png';

const UserNameSection2 = () => {
    return (
        <div className="max-w-[1320px] mx-auto px-3">
            <div className="flex flex-col-reverse lg:flex-row gap-8 mt-32">
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-start">
                    <img className="mx-auto lg:ml-0" src={UserNameSection2Img2} alt="Descriptive image for content" />
                    <p className="text-base font-normal text-gray-900 mx-auto lg:ml-0 text-center lg:text-start mt-4 max-w-lg">
                        Semper faucibus suscipit ultricies eleifend semper sit tellus gravida pretium. Cras cursus ut semper eleifend
                        tortor lectus tristique turpis. Laoreet amet ultrices est lectus accumsan nibh cursus nunc. Faucibus orci,
                        neque, pretium, massa volutpat convallis nisl pellentesque. Gravida in ultrices vitae tortor. Dignissim
                        viverra volutpat neque gravida aliquet urna faucibus viverra vulputate. nibh cursus nunc. Faucibus orci,
                        neque, pretium, massa volutpat convallis nisl pellentesque. Gravida in ultrices vitae tortor. Dignissim
                        viverra volutpat neque gravida aliquet urna faucibus viverra vulputate.
                    </p>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center">
                    <img className="w-full max-w-xl cursor-pointer" src={UserNameSection2Img1} alt="Main UserNameSection2 image" />
                </div>
            </div>
        </div>
    );
};

export default UserNameSection2;