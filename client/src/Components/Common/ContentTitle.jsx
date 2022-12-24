/** @jsxImportSource @emotion/react */
import { commonStyled } from "../Style/CommonStyled";

const ContentTitle = (prop) => {
    return (
        <p css={ commonStyled.contentTitle }>{ prop.title }</p>
    )
};

export default ContentTitle;