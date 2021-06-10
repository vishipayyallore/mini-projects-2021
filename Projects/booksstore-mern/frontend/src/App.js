import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TopNavbar from './components/layout/TopNavbar';
import Footer from './components/layout/Footer';
import SideNavbar from "./components/layout/SideNavBar";

import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import PageNotFound from "./components/shared/PageNotFound";
import ListBooksPage from "./screens/ListBooksPage";
import AddBookPage from "./screens/AddBookPage";
import EditBookPage from "./screens/EditBookPage";
import DeleteBookPage from "./screens/DeleteBookPage";

function App() {
    return (
        <>
            <TopNavbar />

            <div className="container-fluid">
                <ToastContainer autoClose={3000} hideProgressBar />
                <div className=" row">
                    <div className="col-md-2 d-none d-md-block bg-sidebar sidebar">
                        <div className="sidebar-sticky">
                            <SideNavbar />
                        </div>
                    </div>
                    <div className="col-md-10 ml-sm-auto col-lg-10 px-4">
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
