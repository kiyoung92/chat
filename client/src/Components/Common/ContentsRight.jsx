/** @jsxImportSource @emotion/react */
import { commonStyled } from '../Style/CommonStyled';

const ContentsRight = (props) => {
    return (
        <div css={ commonStyled.contentsHeaderRight }>
            <span>{ props.title }</span>
        </div>
    )
}

export default ContentsRight;