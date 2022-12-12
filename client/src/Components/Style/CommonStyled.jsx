/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


export const commonStyled = {
    viewWrap: css`
        width: 100%;
        height: 100%;
    `,
    underlineInputWrap: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        margin-bottom: 10px;
        position: relative;
        box-sizing: border-box;
    `,
    underlineInput: css`
        flex: 1;
        height: 40px;
        border: none;
        border-radius: 0px;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        background: #333;
        transition: 1s ease all;
        margin: 0px;
        &:focus {
            outline: none;
            :first-of-type + div {
                background: linear-gradient(#3d6afe, #3d6afe) bottom / 100% 100% no-repeat #ccc;
            }
        }
    `,
    inputUnderline: css`
        position: absolute;
        background: linear-gradient(#3d6afe, #3d6afe) bottom / 0% 100% no-repeat #ccc;
        height: 2px;
        width: 100%;
        transition: 0.4s ease all;
        bottom: 0px;
        margin: 0px;
        padding: 0px;
    `,
    footerButtonWrap: css`
        position: absolute;
        height: 75px;
        width: 100%;
        bottom: 0;
        box-sizing: border-box;
    `,
    footerButton: css`
        width: 100%;
        height: 100%;
        border: 0;
        border-radius: 10px;
        background: #3d6afe;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
    `,
    padding0_20: css`
        padding: 0px 20px;
    `,
    h100p: css`
        height: 100%;
    `,
    pb20: css`
        padding-bottom: 20px;
    `,
    contentsHeaderWrap: css`
        height: 60px;
        top: 0;
        box-sizing: border-box;
        color: #fff;
        display: flex;
        align-items: center;
        padding: 0px 20px;
        justify-content: space-between;
    `,
    contentsHeaderRight: css`
        flex: 0.2;
        text-align: right;
        color: #ccc;
        font-weight: bold;
    `,
    contentsHeaderLeft: css`
        flex: 0.2;
        text-align: left;
        color: #ccc;
        font-weight: bold;
    `,
    contentsHeaderTitle: css`
        flex: 1;
        color: #ccc;
        font-weight: bold;
        text-align: center;
        font-size: 18px;
    `
}