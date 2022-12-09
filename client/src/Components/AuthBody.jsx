/** @jsxImportSource @emotion/react */
import { authStyled } from '../Components/AuthStyled';
import { commonStyled } from './CommonStyled';

const AuthBody = () => {
    return(
        <div css={ commonStyled.w100p }>
            <form css={ commonStyled.w100p } action="">
                <div css={ authStyled.inputWrap }>
                    <input css={ authStyled.input } type="text" name="아이디 입력" placeholder='아이디를 입력해주세요' />
                    <p css={ authStyled.lined }></p>
                </div>
                <div css={ authStyled.inputWrap }>
                    <input css={ authStyled.input } type="password" name="패스워드 입력" placeholder='패스워드를 입력해주세요' />
                    <p css={ authStyled.lined }></p>
                </div>
                {/* <div css={ authStyled.buttonWrap }>
                    <button css={ authStyled.button }>로그인</button>
                </div> */}
            </form>
        </div>
    )
}

export default AuthBody;