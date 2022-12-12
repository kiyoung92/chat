/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


export const commonStyled = {
    row: css`
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    paddingWrap: css`
        width: 100%;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
    `,
    wrap: css`
        width: 100%;
        height: 100%;
    `,
    w100p: css`
        width: 100%;
    `,
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
            :first-of-type + div {
                background: linear-gradient(#3d6afe, #3d6afe) bottom / 100% 100% no-repeat #888;
            }
        }
    `,
    lined: css`
        position: absolute;
        background: linear-gradient(#3d6afe, #3d6afe) bottom / 0% 100% no-repeat #888;
        height: 1.5px;
        width: 100%;
        transition: 0.4s ease all;
        bottom: 0px;
        margin: 0px;
        padding: 0px;
    `,
    footerWrap: css`
        position: fixed;
        bottom: 0px;
        height: 60px;
        box-sizing: border-box;
        display: flex;
        width: 100%;
    `,
    summitButton: css`
        width: 100%;
    `,
    formWrap: css`
        width: 100%;
        box-sizing: border-box;
    `
}