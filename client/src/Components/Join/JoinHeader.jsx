/** @jsxImportSource @emotion/react */
import ContentsHeader from "../Common/ContentsHeader";
import ContentsHeaderTitle from "../Common/ContentsHeaderTitle";
import BackButton from "../Common/BackButton";
import ContentsRight from '../Common/ContentsRight';


const JoinHeader = () => {
    return (
        <ContentsHeader>
            <BackButton />
            <ContentsHeaderTitle />
            <ContentsRight title={ '로그인' } />
        </ContentsHeader>
    )
}

export default JoinHeader;