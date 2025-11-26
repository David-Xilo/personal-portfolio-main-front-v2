import React from 'react';

const ArrowRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M8.71069 5.70711C9.10122 5.31658 9.73438 5.31658 10.1249 5.70711L15.0123 10.5993C15.7927 11.3805 15.7924 12.6463 15.0117 13.4271L10.1213 18.3174C9.73077 18.708 9.09761 18.708 8.70708 18.3174C8.31655 17.9269 8.31655 17.2937 8.70708 16.9032L12.8927 12.7176C13.2833 12.3271 13.2832 11.6939 12.8927 11.3034L8.71069 7.12132C8.32016 6.7308 8.32016 6.09763 8.71069 5.70711Z" fill="currentColor"/>
        </svg>
    );
}

export default ArrowRight;
