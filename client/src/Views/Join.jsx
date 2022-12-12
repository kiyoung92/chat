/** @jsxImportSource @emotion/react */
// import UnderlineInput from "../Components/Common/UnderlineInput";
import FooterButton from "../Components/Common/FooterButton";
import FooterButtonWrap from "../Components/Common/FooterButtonWrap";
import { commonStyled } from "../Components/Style/CommonStyled";
import JoinHeader from "../Components/Join/JoinHeader";

const Join = () => {
    return (
        <div css={ commonStyled.viewWrap }>
            <JoinHeader />
            <FooterButtonWrap>
                <FooterButton buttonText={ '로그인' } />
            </FooterButtonWrap>
        </div>
    )
}

export default Join;