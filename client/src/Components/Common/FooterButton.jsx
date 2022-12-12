/** @jsxImportSource @emotion/react */
import { commonStyled } from "../Style/CommonStyled";

const FooterButton = (props) => {
    return (
        <div css={ [ commonStyled.padding0_20, commonStyled.h100p ] }>
            <button css={ commonStyled.footerButton }>{ props.buttonText }</button>
        </div>
    )
}

export default FooterButton;