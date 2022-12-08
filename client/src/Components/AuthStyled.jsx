/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const authStyled = {
    inputWrap: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        margin-bottom: 10px;
    `,
    input: css`
        flex: 1;
        height: 40px;
        border: none;
        border-bottom: 2px solid #888;
        background: #333;
        border-radius: 0px;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        transition: 1s ease all;
        padding: 0px 10px;
        background: linear-gradient(#3182f6, #3182f6) bottom / 0% 2px no-repeat #333;
        &:focus {
            outline: none;
            /* border-bottom: 2px solid #3182f6; */
            border-bottom: 2px solid #888;
            background-size: 100% 2px;
        }
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