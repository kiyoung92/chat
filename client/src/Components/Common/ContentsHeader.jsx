/** @jsxImportSource @emotion/react */
import { commonStyled } from "../Style/CommonStyled";

const ContentsHeader = ({ children }) => {
    return (
        <div css={ commonStyled.contentsHeaderWrap }>{ children }</div>
    )
}

export default ContentsHeader;