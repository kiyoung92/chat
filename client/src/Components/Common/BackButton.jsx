/** @jsxImportSource @emotion/react */
import { ReactComponent as Back } from '../../Images/back.svg';
import { commonStyled } from '../Style/CommonStyled';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { createBrowserHistory } from 'history';


// 히스토리로 백 버튼 수정해야함.
// 안드 백 버튼 적용해야함.
const BackButton = (props) => {
    const navigator = useNavigate();
    const navigatorHandler = (e) => {
        e.preventDefault();
        navigator('/');
    }

    useEffect(() => {
        const hist = createBrowserHistory();

        console.log(hist.location);
    }, [])

    return (
        <div css={ commonStyled.contentsHeaderLeft } onClick={ navigatorHandler }>
            <Back width={ props.width } height={ props.height } stroke={ props.stroke } />
        </div>
    )
}

export default BackButton;