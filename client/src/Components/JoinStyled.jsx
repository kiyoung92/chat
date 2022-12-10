/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export const joinStyled = {
    wrap: css`
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `,
    headerWrap: css`
        height: 60px;
        width: 100%;
        position: absolute;
        box-sizing: border-box;
        top: 0;
        display: flex;
        padding: 0px 10px;
        color: #888;
    `,
    headerRight: css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 0.2;
        overflow: hidden;
    `,
    headerLeft: css`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex: 0.2;
        overflow: hidden;
    `,
    headerLeftText: css`
        font-weight: bold;
        padding-right: 5px;
    `, 
    headerTitle: css`
        display: flex;
        flex: 0.6;
        justify-content: center;
        align-items: center;
    `
}