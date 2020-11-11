import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TopNavbar from './components/layout/TopNavbar';
import Footer from './components/layout/Footer';
import SideNavbar from "./components/layout/SideNavBar";

import DashboardPage from "./components/pages/DashboardPage";

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
                            <Route path="/" exact component={DashboardPage} />
                        </Switch>
                    </div>
                </div>
            </div>


      <Footer />
    </>
  );
}

export default App;
