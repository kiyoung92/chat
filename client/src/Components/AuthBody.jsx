/** @jsxImportSource @emotion/react */
import { authStyled } from '../Components/AuthStyled';
import { commonStyled } from './CommonStyled';

const AuthBody = () => {
    return(
        <div css={ commonStyled.w100p }>
            <form css={ commonStyled.w100p } action="">
                <div css={ authStyled.inputWrap }>
                    <p css={ authStyled.inputText }>아이디</p>
                    <input css={ authStyled.input } type="text" name="아이디 입력" id="" />
                </div>
                <div css={ authStyled.inputWrap }>
                    <p css={ authStyled.inputText }>패스워드</p>
                    <input css={ authStyled.input } type="password" name="패스워드 입력" id="" />
                </div>
                <div css={ authStyled.buttonWrap }>
                    <button css={ authStyled.button }>로그인</button>
                </div>
            </form>
        </div>
    )
}

export default AuthBody;