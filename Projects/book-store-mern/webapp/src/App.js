import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TopNavbar from './components/layout/TopNavbar';
import Footer from './components/layout/Footer';
import SideNavbar from "./components/layout/SideNavBar";

import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import PageNotFound from "./components/shared/PageNotFound";
import ListBooksPage from "./components/books/ListBooksPage";
import AddBookPage from "./components/books/AddBookPage";
import EditBookPage from "./components/books/EditBookPage";
import DeleteBookPage from "./components/books/DeleteBookPage";

function App() {
    return (
        <>
            <TopNavbar />

            <div className="container-fluid">
                <div className=" row">
                    <div className="col-md-2 d-none d-md-block bg-sidebar sidebar">
                        <div className="sidebar-sticky">
                            <SideNavbar />
                        </div>
                    </div>
                    <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
                        <Switch>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/about" component={AboutPage} />
                            <Route path="/list-books" component={ListBooksPage} />
                            <Route path="/add-book" component={AddBookPage} />
                            <Route path="/edit-book/:id" component={EditBookPage} />
                            <Route path="/delete-book/:id" component={DeleteBookPage} />
                            <Route component={PageNotFound} />
                        </Switch>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
}

export default App;
