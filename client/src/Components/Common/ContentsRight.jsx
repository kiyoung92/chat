/** @jsxImportSource @emotion/react */
import { commonStyled } from '../Style/CommonStyled';

const ContentsRight = (props) => {
    return (
        <div css={ commonStyled.contentsHeaderRight }>
            <p>{ props.title }</p>
        </div>
    )
}

export default ContentsRight;