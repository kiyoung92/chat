/** @jsxImportSource @emotion/react */
import Main from "./Views/Main";
import Auth from "./Views/Auth";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Main /> }></Route>
        <Route path="/auth" element={ <Auth /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
