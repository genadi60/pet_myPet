import {Route, Switch} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div id="container">
      <Header/>
      <main id="site-content">
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/home" component={Main}/>
            <Route path="/pets/:category" component={Dashboard}/>
        </Switch>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
