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
        flex: 0.8;
        height: 40px;
        border: none;
        border-bottom: 2px solid #fff;
        background: #333;
        border-radius: 0px;
    `,
    inputText: css`
        flex: 0.2;
        text-align: right;
        font-weight: bold;
        font-size: 14px;
        margin-right: 10px;
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
    `
}