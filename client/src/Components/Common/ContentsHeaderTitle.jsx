/** @jsxImportSource @emotion/react */
import { commonStyled } from "../Style/CommonStyled";

const ContentsHeaderTitle = (props) => {
    return (
        <div css={ commonStyled.contentsHeaderTitle }>{ props.title }</div>
    )
}

export default ContentsHeaderTitle;