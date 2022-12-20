/** @jsxImportSource @emotion/react */
import { commonStyled } from "../Style/CommonStyled";

const ContentBody = ({ children }) => {
    return (
        <div css={ commonStyled.contentsBodyWrap }>{ children }</div>
    )
}

export default ContentBody;