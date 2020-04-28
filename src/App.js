import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Work from './Work';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path ="/" exact component={Home}/>
                    <Route path ="/about" exact component={About}/>
                    <Route path ="/work" exact component={Work}/>
                </div>
            </Router>
        );
    };
}
export default App;