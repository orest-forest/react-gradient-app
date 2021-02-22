import logo from './logo.svg';
import './app.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import React from 'react'
import {useState} from 'react'
import Home from './pages/Home'
import New from './pages/New'
import Edit from './pages/Edit'
import InputEdit from "./components/InputEdit";

function App() {
    return (
        <Router>
            <div className="App">
                <hr/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/new" component={New}/>
                    <Route path="/edit/:id" component={InputEdit}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
