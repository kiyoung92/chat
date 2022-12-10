/** @jsxImportSource @emotion/react */
import { joinStyled } from './JoinStyled';
import { ReactComponent as BackButton} from '../Images/back.svg';

const JoinHeader = () => {
    return (
        <div css={ joinStyled.headerWrap }>
            <div css={ joinStyled.headerLeft }>
                <BackButton width='30px' height='30px' stroke='#888' alt="" />
            </div>
            <div css={ joinStyled.headerRight }>
                <p css={ joinStyled.headerLeftText }>로그인</p>
            </div>            
        </div>
    )
}

export default JoinHeader;