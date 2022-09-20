import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Navigate = (path) => useNavigate(path);

export const ScrollToTop = () => (
    useEffect(() => {
        try { // start from top (scroll)
            window.scroll ({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        } catch {
            window.scrollTo(0,0) // fallback to old browsers
        }
    }, [])    
)

