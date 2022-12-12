/** @jsxImportSource @emotion/react */
import { ReactComponent as Back } from '../../Images/back.svg';
import { commonStyled } from '../Style/CommonStyled';

const BackButton = (props) => {
    return (
        <div css={ commonStyled.contentsHeaderLeft }>
            <Back width={ props.width } height={ props.height } stroke={ props.stroke } />
        </div>
    )
}

export default BackButton;