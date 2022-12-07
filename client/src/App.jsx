/** @jsxImportSource @emotion/react */
import { styled } from "./Components/AuthStyled";
import AuthHeader from "./Components/AuthHeader";

const App = () => {
  return (
    <div>
      <h1 css={ styled.header }>안녕!🤩</h1>
      <AuthHeader />
    </div>
  );
}

export default App;
