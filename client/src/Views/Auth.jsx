/** @jsxImportSource @emotion/react */
import AuthHeader from "../Components/AuthHeader";
import AuthBody from "../Components/AuthBody";
import { commonStyled } from "../Components/CommonStyled";

const Auth = () => {
    return (
        <div css={ commonStyled.row }>
            <AuthHeader />
            <AuthBody />
        </div>
    )
}

export default Auth;