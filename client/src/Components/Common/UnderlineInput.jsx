/** @jsxImportSource @emotion/react */
import { commonStyled } from "../Style/CommonStyled"; 

const UnderlineInput = (props) => {
    return (
        <div css={ commonStyled.underlineInputWrap }>
            <input css={ commonStyled.underlineInput } type={ props.type } placeholder={ props.placeholder } />
            <div css={ commonStyled.inputUnderline }></div>
        </div>
    )
}

export default UnderlineInput;