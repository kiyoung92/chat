/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Rocket from '../Images/rocket-front-color.png';

const mainStyle = {
    wrap: css`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: #333;
        @keyframes fadeout {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
    `,
    img: css`
        position: absolute;
        height: calc(100% - 400px);
        bottom: calc(0% - (100% - 400px));
        transition: 4s ease all;
        
    `
}

const Main = () => {
    const navigator = useNavigate();
    const wrap = useRef(null);
    const img = useRef(null);

    const rocketLauncher = () => {
        img.current.style.bottom = `calc(0% - (100% - 400px - ${ img.current.offsetHeight + wrap.current.offsetHeight }px))`;
        
        setTimeout(() => {
            wrap.current.style.animation = `fadeout 3s`;
        }, 1000);
        setTimeout(() => {
            navigator('/auth');
        }, 3600)
    }

    useEffect(() => {
        if (img.current !== null) {
            rocketLauncher();
        }
    });

    return (
        <div css={ mainStyle.wrap } ref={ wrap }>
            <img src={ Rocket } alt="" css={ mainStyle.img } ref={ img } />
        </div>
    )
}

export default Main;