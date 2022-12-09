/** @jsxImportSource @emotion/react */
import InputFocusLine from './Common/InputLine';
import { authStyled } from '../Components/AuthStyled';
import { commonStyled } from './CommonStyled';

const AuthBody = () => {

    return(
        <div css={ commonStyled.w100p }>
            <form css={ commonStyled.w100p }>
                <div css={ authStyled.inputWrap }>
                    <input css={ authStyled.input } type="text" name="아이디 입력" placeholder='아이디를 입력해주세요' />
                    <InputFocusLine />
                </div>
                <div css={ authStyled.inputWrap }>
                    <input css={ authStyled.input } type="password" name="패스워드 입력" placeholder='패스워드를 입력해주세요' />
                    <InputFocusLine />
                </div>
            </form>
        </div>
    )
}

export default AuthBody;