import React from 'react'

const HeadingPara = ({ headingText, paraText, headingClass, paraClass,editsvg }) => {
    return (
        <div>
            <svg className={`${editsvg}`} width="189" height="8" viewBox="0 0 189 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" width="188" height="8" fill="#01C8FF" />
                <rect width="166" height="8" fill="#2C49FE" />
            </svg>
            <h2 className={`${headingClass}`}>{headingText}</h2>
            <p className={`${paraClass}`}>{paraText}</p>
        </div>
    )
}

export default HeadingPara
