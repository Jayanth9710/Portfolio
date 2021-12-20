import "./App.css";
import HomePage from "./home";
import Projects from "./projects"
import About from "./about"
import Contact from './contact'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
     <Router>
     <div id="wrapper">
       <div id="content-wrapper" className="d-flex flex-column">
         <div id="content">
           <Switch>
             <Route key={1} path="/" component={HomePage} exact={true}/>
             <Route key={2} path="/projects" component={Projects} exact={true}/>
             <Route key={3} path="/about" component={About} exact={true}/>
             <Route key={4} path="/contact" component={Contact} exact={true}/>
           </Switch>
         </div>
       </div>
     </div>
   </Router>
    </>
  );
}

export default App;
