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


  const background = () => {
    let imgcontainer = document.getElementById("imgcontainer");

    // These are the heading
    let heading1 = document.getElementById("heading1")
    let heading2 = document.getElementById("heading2")
    let heading3 = document.getElementById("heading3")
    let heading4 = document.getElementById("heading4")
    let heading5 = document.getElementById("heading5")

    // These are the cards
    let card1 = document.getElementById("card1")
    let card2 = document.getElementById("card2")
    let card3 = document.getElementById("card3")
    let card4 = document.getElementById("card4")
    let card5 = document.getElementById("card5")
    let card6 = document.getElementById("card6")
    let card7 = document.getElementById("card7")
    let card8 = document.getElementById("card8")
    let card9 = document.getElementById("card9")
    let card10 = document.getElementById("card10")
    let card11 = document.getElementById("card11")
    let card12 = document.getElementById("card12")
    let card13 = document.getElementById("card13")
    let card14 = document.getElementById("card14")
    let card15 = document.getElementById("card15")


    imgcontainer.classList.toggle("bodyvisible")
    heading1.classList.toggle("headingvisible")
    heading2.classList.toggle("headingvisible")
    heading3.classList.toggle("headingvisible")
    heading4.classList.toggle("headingvisible")
    heading5.classList.toggle("headingvisible")


    card1.classList.toggle("headingvisible")
    card2.classList.toggle("headingvisible")
    card3.classList.toggle("headingvisible")
    card4.classList.toggle("headingvisible")
    card5.classList.toggle("headingvisible")
    card6.classList.toggle("headingvisible")
    card7.classList.toggle("headingvisible")
    card8.classList.toggle("headingvisible")
    card9.classList.toggle("headingvisible")
    card10.classList.toggle("headingvisible")
    card11.classList.toggle("headingvisible")
    card12.classList.toggle("headingvisible")
    card13.classList.toggle("headingvisible")
    card14.classList.toggle("headingvisible")
    card15.classList.toggle("headingvisible")

  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/">
            <Amazon background={background}/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
