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
        justify-content: space-between;
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
    `,
    bodyWrap: css`
        display: flex;
        height: calc(100% - 60px - 60px);
        overflow-y: auto;
        flex-direction: column;
        width: 100%;
        color: #fafafa;
        box-sizing: border-box;
    `,
    footerWrap: css`
        position: absolute;
        bottom: 0px;
        height: 60px;
    `,
    rowWrap: css`
        padding: 10px 20px;
    `,
    bodyTitle: css`
        font-size: 24px;
        font-weight: bold;
    `,
    
}