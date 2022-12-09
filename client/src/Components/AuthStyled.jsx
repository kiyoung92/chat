/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const authStyled = {
    inputWrap: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        margin-bottom: 10px;
        position: relative;
        box-sizing: border-box;
    `,
    input: css`
        flex: 1;
        height: 40px;
        border: none;
        border-radius: 0px;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        padding: 0px 10px;
        background: #333;
        transition: 1s ease all;
        margin: 0px;
        &:focus {
            outline: none;
            :first-of-type + p {
                background: linear-gradient(#3d6afe, #3d6afe) bottom / 100% 4px no-repeat #aaa;
            }
        }
    `,
    lined: css`
        position: absolute;
        background: linear-gradient(#3d6afe, #3d6afe) bottom / 0% 4px no-repeat #aaa;
        height: 2px;
        width: 100%;
        transition: 0.4s ease all;
        bottom: 0px;
        margin: 0px;
        padding: 0px;
    `,
    buttonWrap: css`
        width: 100%;
        height: 46px;
        display: flex;
        margin-top: 20px;
    `,
    button: css`
        height: 100%;
        flex: 1;
        border: none;
        border-radius: 10px;
        background: #fafafa;
        padding: 0px;
        margin-left: 10px;
    `,
}