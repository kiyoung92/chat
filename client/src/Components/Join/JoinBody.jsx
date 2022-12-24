import ContentBody from "../Common/ContentsBody";
import UnderlineInput from '../Common/UnderlineInput';
import ContentTitle from "../Common/ContentTitle";

const JoinBody = () => {
    return (
        <ContentBody>
            <ContentTitle title={ '회원가입을 시작할게요' } />
            <UnderlineInput placeholder={ '아이디를 입력해주세요.' } />
            <UnderlineInput placeholder={ '패스워드를 입력해주세요.' } />
        </ContentBody>
    )
}

export default JoinBody;