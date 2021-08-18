/* React imports */
import React from "react";
// import React, { Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import "./css/bootstrap.min.css"
import "./css/bevellier.css"
import "./css/alpino.css"
import "./css/main.css";

// import Footer from "./components/footer";

import Header from "./components/header";
import Footer from "./components/footer";
import LandingScreen from "./components/landing_screen";
import Browse from "./components/browse"
import SearchResults from "./components/search_results"
import PrivacyPolicy from "./components/privacy_policy"
import About from "./components/about"

import ScrollToTop from "./components/scroll_to_top";

class App extends React.Component {

    render() {
     
        return (
        <Router basename="/">
            <ScrollToTop />
            <Switch>
                <Route exact path="/">
                    <ScrollToTop/>
                    <LandingScreen/>
                    <Browse/>
                </Route>
                <Route path="/search">
                    <ScrollToTop/>
                    <div className="container">
                        <Header/>
                    </div>
                    <SearchResults amount="12" term="blockchain"/>
                </Route>
                <Route path="/privacy">
                    <ScrollToTop/>
                    <div className="container">
                        <Header/>
                    </div>
                    <PrivacyPolicy/>
                </Route>
                <Route path="/about">
                    <ScrollToTop/>
                    <div className="container">
                        <Header/>
                    </div>
                    <About/>
                </Route>
            </Switch>

            <Footer/>
            <div className="bg-top"> </div>
            <div className="bg-bottom"> </div>
    
    
        </Router>
        );}
}

ReactDOM.render(<App />, document.getElementById("body"));