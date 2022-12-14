/** @jsxImportSource @emotion/react */
import { commonStyled } from "../Style/CommonStyled";

const FooterButtonWrap = ({ children }) => {
    return (
        <div css={ [ commonStyled.footerButtonWrap, commonStyled.mb20 ] }>{ children }</div>
    )
}

export default FooterButtonWrap;