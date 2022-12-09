/** @jsxImportSource @emotion/react */
import { commonStyled } from "../Components/CommonStyled";
import AuthHeader from "../Components/AuthHeader";
import AuthBody from "../Components/AuthBody";

const Auth = () => {
    return (
        <div css={ commonStyled.paddingWrap }>
            <AuthHeader />
            <AuthBody />
        </div>
    )
}

export default Auth;