export const Flag = props => {
    const handleClick = lang => {
        props.setIsLang(lang);
        props.setIsOpen(false);
    }
    return (
    <div style={{width: 'inherit', height: 'inherit'}} onClick={handleClick('English')}>
        <svg style={{width: 'inherit', height: 'inherit'}} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame 1" clipPath="url(#clip0_1_2)">
                <rect width="30" height="30" fill="white"/>
                <g id="ENG">
                    <path d="M34.5 -1H-4.72V30.97H34.5V-1Z" fill="white"/>
                    <path d="M22.36 11.21L35.32 1.07V-0.35H34.43L19.65 11.21H22.36Z" fill="#BD0034"/>
                    <path d="M19.65 19.4L33.22 30.01V27.89L22.36 19.4H19.65Z" fill="#BD0034"/>
                    <path d="M-3.9 2.09L7.71 11.21H10.42L-3.9 -0.04V2.09Z" fill="#BD0034"/>
                    <path d="M7.71 19.4L-6 30.13V30.31H-3.52L10.42 19.4H7.71Z" fill="#BD0034"/>
                    <path d="M31.82 -0.35H18.09V10.4L31.82 -0.35Z" fill="#1A237B"/>
                    <path d="M12.02 -0.35H-1.65L12.02 10.4V-0.35Z" fill="#1A237B"/>
                    <path d="M34.51 11.21V3.88L25.19 11.21H34.51Z" fill="#1A237B"/>
                    <path d="M34.51 26.65V19.4H25.19L34.51 26.65Z" fill="#1A237B"/>
                    <path d="M-0.88 30.31H12.02V20.21L-0.88 30.31Z" fill="#1A237B"/>
                    <path d="M18.09 30.31H31.03L18.09 20.21V30.31Z" fill="#1A237B"/>
                    <path d="M-4.72 19.4V26.98L4.92 19.4H-4.72Z" fill="#1A237B"/>
                    <path d="M-4.72 11.21H4.92L-4.72 3.62V11.21Z" fill="#1A237B"/>
                    <path d="M13.24 -1V12.46H-4.72V18.16H13.24V30.97H16.87V18.16H34.51V12.46H16.87V-1H13.24Z" fill="#BD0034"/>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_1_2">
                    <rect width="30" height="30" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    </div>
)};

export const FlagEng = props => {
    const handleClick = lang => {
        props.setIsOpen(false);
        props.setIsLang(lang);
        
    }
    return (
    <div style={{width: 'inherit', height: 'inherit'}} onClick={() => handleClick('English')}>
        <svg style={{width: 'inherit', height: 'inherit'}} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame 1" clipPath="url(#clip0_1_2)">
                <rect width="30" height="30" fill="white"/>
                <g id="ENG">
                    <path d="M34.5 -1H-4.72V30.97H34.5V-1Z" fill="white"/>
                    <path d="M22.36 11.21L35.32 1.07V-0.35H34.43L19.65 11.21H22.36Z" fill="#BD0034"/>
                    <path d="M19.65 19.4L33.22 30.01V27.89L22.36 19.4H19.65Z" fill="#BD0034"/>
                    <path d="M-3.9 2.09L7.71 11.21H10.42L-3.9 -0.04V2.09Z" fill="#BD0034"/>
                    <path d="M7.71 19.4L-6 30.13V30.31H-3.52L10.42 19.4H7.71Z" fill="#BD0034"/>
                    <path d="M31.82 -0.35H18.09V10.4L31.82 -0.35Z" fill="#1A237B"/>
                    <path d="M12.02 -0.35H-1.65L12.02 10.4V-0.35Z" fill="#1A237B"/>
                    <path d="M34.51 11.21V3.88L25.19 11.21H34.51Z" fill="#1A237B"/>
                    <path d="M34.51 26.65V19.4H25.19L34.51 26.65Z" fill="#1A237B"/>
                    <path d="M-0.88 30.31H12.02V20.21L-0.88 30.31Z" fill="#1A237B"/>
                    <path d="M18.09 30.31H31.03L18.09 20.21V30.31Z" fill="#1A237B"/>
                    <path d="M-4.72 19.4V26.98L4.92 19.4H-4.72Z" fill="#1A237B"/>
                    <path d="M-4.72 11.21H4.92L-4.72 3.62V11.21Z" fill="#1A237B"/>
                    <path d="M13.24 -1V12.46H-4.72V18.16H13.24V30.97H16.87V18.16H34.51V12.46H16.87V-1H13.24Z" fill="#BD0034"/>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_1_2">
                    <rect width="30" height="30" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    </div>
)};

export const FlagPor = props => {
    const handleClick = lang => {
        props.setIsLang(lang);
        props.setIsOpen(false);
    }
    return(
    <div style={{width: 'inherit', height: 'inherit'}} onClick={() => handleClick('Português')}>
        <svg style={{width: 'inherit', height: 'inherit'}} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame 2" clipPath="url(#clip0_2_22)">
                <rect width="30" height="30" fill="white"/>
                    <g id="POR">
                        <path d="M40.43 0H-11V30H40.43V0Z" fill="#3C9242"/>
                        <path d="M14.7142 0.00213136L-0.288773 14.9946L14.7037 29.9976L29.7067 15.0051L14.7142 0.00213136Z" fill="#EDC226"/>
                        <path d="M23.17 15C23.17 19.67 19.39 23.45 14.72 23.45C10.05 23.45 6.27 19.67 6.27 15C6.27 10.33 10.05 6.54 14.72 6.54C19.39 6.54 23.17 10.33 23.17 15Z" fill="#1B1464"/>
                    </g>
                </g>
                    <defs>
                    <clipPath id="clip0_2_22">
                    <rect width="30" height="30" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    </div>
)};

export const FlagEsp = props => {
    const handleClick = lang => {
        props.setIsLang(lang);
        props.setIsOpen(false);
    }
    return (
    <div style={{width: 'inherit', height: 'inherit'}} onClick={() => handleClick('Español')}>
        <svg style={{width: 'inherit', height: 'inherit'}} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame 3" clipPath="url(#clip0_2_41)">
            <rect width="30" height="30" fill="white"/>
            <g id="ESP">
            <path d="M40.43 0H-11V30H40.43V0Z" fill="#B5002A"/>
            <path d="M40.43 8.21H-11V21.78H40.43V8.21Z" fill="#F4C327"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_2_41">
            <rect width="30" height="30" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    </div>
)};





