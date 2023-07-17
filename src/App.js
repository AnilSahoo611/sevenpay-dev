// import Language from './Component/Language/Language';
import React, { lazy, Suspense, useEffect } from "react";
import Loading from "./ShareModule/Loading";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Language from "./Component/Language/Language";
import PrivateRoute from "./ShareModule/PrivateRouter";
const HomePage = lazy(() => import("./Component/Home/Home"));
const AboutUs = lazy(() => import("./Component/AboutUs/Aboutus"));
const ContactPage = lazy(() => import("./Component/Contact/Contact"));
const CareerPage = lazy(() => import("./Component/Career/Carrer"));
const JobDescription = lazy(() => import("./Component/Career/JobDescription"));
const CareerForm = lazy(() =>
  import("./Component/Career/Career Form/CareerForm.js")
);

function App() {

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* <Route
              path="/"
              element={
                  <Language />
              }
            /> */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/About"
              element={
                <PrivateRoute>
                  <AboutUs />
                </PrivateRoute>
              }
            />
            <Route
              path="/Contact"
              element={
                <PrivateRoute>
                  <ContactPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/Carrer"
              element={
                <PrivateRoute>
                  <CareerPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/JobDescription"
              element={
                <PrivateRoute>
                  <JobDescription />
                </PrivateRoute>
              }
            />
            <Route
              path="/CareerForm"
              element={
                <PrivateRoute>
                  <CareerForm />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
