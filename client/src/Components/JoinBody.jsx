/** @jsxImportSource @emotion/react */
import { joinStyled } from "./JoinStyled";
import { commonStyled } from "./CommonStyled";
import InputLine from '../Components/Common/InputLine';
import JoinFooter from "./JoinFooter";

const JoinBody = () => {
    return (
        <div css={ joinStyled.bodyWrap }>
            <div css={ joinStyled.rowWrap }>
                <div>
                    <p css={joinStyled.bodyTitle }>회원가입을 시작할게요</p>
                </div>
                <form css={ commonStyled.formWrap } action="">
                    <div css={ commonStyled.inputWrap }>
                        <input css={ commonStyled.input } type="text" placeholder="아이디를 입력해주세요" />
                        <InputLine />
                    </div>
                    <div css={ commonStyled.inputWrap }>
                        <input type="password" css={ commonStyled.input } placeholder='패스워드릴 입력해주세요' />
                        <InputLine />
                    </div>
                    <JoinFooter />
                </form>
            </div>
        </div>
    )
}

export default JoinBody;