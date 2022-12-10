/** @jsxImportSource @emotion/react */
import Main from "./Views/Main";
import Auth from "./Views/Auth";
import Join from "./Views/Join";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Main /> }></Route>
        <Route path='/auth' element={ <Auth /> }></Route>
        <Route path='/join' element={ <Join /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
