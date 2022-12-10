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
        
    `,
    img: css`
        position: absolute;
        height: calc(100% - 400px);
        bottom: calc(0% - (100% - 400px));
        transition: 4s ease all;
        @keyframes fadeout {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
        
    `,
    appName: css`
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        width: 100%;
        height: 100%;
        opacity: 0;
        @keyframes fadein {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `
}

const Main = () => {
    const navigator = useNavigate();
    const wrap = useRef(null);
    const img = useRef(null);
    const appName = useRef(null);

    const rocketLauncher = () => {
        img.current.style.bottom = `calc(0% -  (100% - 400px - ${ (img.current.offsetHeight + wrap.current.offsetHeight) / 2 }px))`
        
        setTimeout(() => {
            appName.current.style.animation = `fadein 3s`;
            img.current.style.animation = `fadeout 3s`;
        }, 1000);
        setTimeout(() => {
            navigator('/join');
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
            <div css={ mainStyle.appName } ref={ appName }>
                <h1>TEST</h1>
            </div>
        </div>
    )
}

export default Main;