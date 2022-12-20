/** @jsxImportSource @emotion/react */
// import UnderlineInput from "../Components/Common/UnderlineInput";
import FooterButton from "../Components/Common/FooterButton";
import FooterButtonWrap from "../Components/Common/FooterButtonWrap";
import { commonStyled } from "../Components/Style/CommonStyled";
import JoinHeader from "../Components/Join/JoinHeader";
import JoinBody from "../Components/Join/JoinBody";

const Join = () => {

    return (
        <div css={ commonStyled.viewWrap }>
            <JoinHeader />
            <JoinBody />
            <FooterButtonWrap>
                <FooterButton buttonText={ '회원가입' } />
            </FooterButtonWrap>
        </div>
    )
}

export default Join;