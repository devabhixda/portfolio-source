import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import WorkEx from './WorkEx';
import Projects from './Projects';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path ="/" exact component={Home}/>
                    <Route path ="/education" component={About}/>
                    <Route path ="/work" component={Work}/>
                    <Route path ="/workex" component={WorkEx}/> 
                    <Route path ="/projects" component={Projects}/>
                    <Route path ="/contact" component={Contact}/>
                </div>
            </Router>
        );
    };
}
export default App;