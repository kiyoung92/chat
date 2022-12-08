/** @jsxImportSource @emotion/react */
import { commonStyled } from "./Components/CommonStyled";
import Auth from "./Views/Auth";

const App = () => {
  return (
    <div css={ commonStyled.paddingWrap }>
      <Auth />
    </div>
  );
}

export default App;
