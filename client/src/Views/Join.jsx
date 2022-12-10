/** @jsxImportSource @emotion/react */
import JoinHeader from "../Components/JoinHeader";
import JoinBody from "../Components/JoinBody";
import { joinStyled } from "../Components/JoinStyled";

const Join = () => {
    return (
        <div css={ joinStyled.wrap }>
            <JoinHeader />
            <JoinBody />
        </div>
    )
}

export default Join;