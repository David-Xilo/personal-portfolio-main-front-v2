import React from 'react';

const ArrowLeft: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M15.2893 18.2929C14.8988 18.6834 14.2656 18.6834 13.8751 18.2929L8.98766 13.4007C8.20726 12.6195 8.20757 11.3537 8.98835 10.5729L13.8787 5.68257C14.2692 5.29205 14.9024 5.29205 15.2929 5.68257C15.6835 6.0731 15.6835 6.70626 15.2929 7.09679L11.1073 11.2824C10.7168 11.673 10.7168 12.3061 11.1073 12.6966L15.2893 16.8787C15.6798 17.2692 15.6798 17.9024 15.2893 18.2929Z" fill="currentColor"/>
        </svg>
    );
}

export default ArrowLeft;
