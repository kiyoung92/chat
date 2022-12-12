/** @jsxImportSource @emotion/react */
import ContentsHeader from "../Common/ContentsHeader";
import ContentsHeaderTitle from "../Common/ContentsHeaderTitle";
import BackButton from "../Common/BackButton";
import ContentsRight from '../Common/ContentsRight';

const JoinHeader = () => {
    return (
        <ContentsHeader>
            <BackButton width={ '30px' } height={ '30px' } stroke={ '#ccc' } />
            <ContentsHeaderTitle title={ '타이틀' }/>
            <ContentsRight title={ '로그인' } />
        </ContentsHeader>
    )
}

export default JoinHeader;