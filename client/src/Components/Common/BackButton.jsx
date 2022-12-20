/** @jsxImportSource @emotion/react */
import { ReactComponent as Back } from '../../Images/back.svg';
import { commonStyled } from '../Style/CommonStyled';
import { useNavigate } from "react-router-dom";

const BackButton = (props) => {
    const navigator = useNavigate();

    const navigatorHandler = (e) => {
        e.preventDefault();

        navigator('/');
    }

    return (
        <div css={ commonStyled.contentsHeaderLeft } onClick={ navigatorHandler }>
            <Back width={ props.width } height={ props.height } stroke={ props.stroke } />
        </div>
    )
}

export default BackButton;