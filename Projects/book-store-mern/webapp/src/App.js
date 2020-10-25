import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TopNavbar from './components/layout/TopNavbar';
import Footer from './components/layout/Footer';

import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import PageNotFound from "./components/shared/PageNotFound";

function App() {
    return (
        <div>
            <TopNavbar />
            <div className="container-fluid">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

export default App;
