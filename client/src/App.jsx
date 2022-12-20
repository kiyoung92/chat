/** @jsxImportSource @emotion/react */
import Main from "./Views/Main";
import Join from "./Views/Join";
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css'

const App = () => {
  const location = useLocation();
  
  return (
    <TransitionGroup className={'transitions-wrapper'}>
      <CSSTransition key={ location.pathname }  timeout={ 300 } classNames={ 'left' }>
        <Routes location={ location }>
          <Route path='/' element={ <Main /> }></Route>
          <Route path='/join' element={ <Join /> }></Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
