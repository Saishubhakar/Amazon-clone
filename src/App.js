import Navbar from './Additions/Navbar';
import './Home.css';
import './Images.css'
import './About.css'
import './SignUp.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import SignUp from './Additions/SignUp';
import About from './Additions/About';
import Amazon from './Additions/Amazon';
import Footer from './Additions/Footer';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/">
            <Amazon />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
