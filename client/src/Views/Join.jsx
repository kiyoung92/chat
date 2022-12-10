/** @jsxImportSource @emotion/react */
import JoinHeader from "../Components/JoinHeader";
import JoinBody from "../Components/JoinBody";
import JoinFooter from "../Components/JoinFooter";
import { joinStyled } from "../Components/JoinStyled";

const Join = () => {
    return (
        <div css={ joinStyled.wrap }>
            <JoinHeader />
            <JoinBody />
            <JoinFooter />
        </div>
    )
}

export default Join;