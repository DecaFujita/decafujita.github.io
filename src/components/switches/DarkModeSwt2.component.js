import { useState, useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { Box } from '@mui/material';

const DarkModeSwt2 = props => {
    const [ isActive, setIsActive ] = useState(false);
    let activeRef = useRef(false);

    useEffect(()=>{
        if (activeRef.current) {
            if (isActive){
                anime({
                    easing: 'easeInOutQuad',
                    duration: 500,
                    delay: 200,
                    targets: '#left',
                    scale: 12,
                    zIndex: 1,
                    complete: function() {
                        anime({
                            targets: '#right',
                            scale: 0,
                            duration: 1,
                            zIndex: 1,
                            complete: function(){
                                anime({
                                    easing: 'easeInOutQuad',
                                    duration: 200,
                                    targets: '#right',
                                    scale: 1,
                                })
                            }
                        })
                    }
                })
            } else {
                anime({
                    easing: 'easeInOutQuad',
                    duration: 500,
                    delay: 200,
                    targets: '#right',
                    scale: 12,
                    zIndex:1,
                    complete: function(){
                        anime({
                            duration: 1,
                            targets: '#left',
                            scale: 0,
                            zIndex:1,
                            complete: function(){
                                anime({
                                    duration: 1,
                                    targets: '#right',
                                    zIndex: 0,
                                    complete: function() {
                                        anime({
                                            easing: 'easeInOutQuad',
                                            duration: 200,
                                            targets: '#left',
                                            zIndex: 1,
                                            scale: 1
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        }
    }, [isActive])

    const handleClick = () => {
        activeRef.current = true;
        setIsActive(!isActive)
    }

    return (
    <Box>
        <Box sx={frame} onClick={handleClick}/>
        <Box sx={switcher} >
            <Box id='left' sx={left}/>
            <Box id='right' sx={right}/>
        </Box>
    </Box>
    )
}

//STYLES

const frame = theme => ({
    height: '37px',
    width: '82px',
    borderRadius: '100px',
    border: `1.5px solid ${theme.palette.background.default}`, 
    boxShadow: 'inset 0 0 1px 0px rgba(0,0,0,0.9)',
    zIndex: 3,
    position: 'absolute',
    
})

const switcher = theme => ({
    position: 'absolute',
    top: 1,
    left: 1,
    padding: '10px 15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '35px',
    width: '80px',
    fontSize: '21px',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '100px',
    cursor: 'pointer',
})

const left = theme => ({
    position: 'absolute',
    top: '8px',
    left: '8px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: 'black',
    zIndex: 1,

})

const right = theme => ({
    position: 'absolute',
    top: '8px',
    right: '8px',
    width: '20px',
    height: '20px',
    transform: 'scale(12)',
    zIndex: 0,
    borderRadius: '50%',
    background: 'white'
})

export default DarkModeSwt2;