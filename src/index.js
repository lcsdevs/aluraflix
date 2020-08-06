import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/Home';
import CadastroVideo from './pages/cadastro/video';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const page404 = () => (<div>Not Found</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route component={page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
