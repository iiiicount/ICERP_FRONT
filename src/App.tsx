import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MyInfo from "./components/MyInfo";
import routes from "./routes";
import React from "react";
import "./App.css";

function App() {
    return (
        <Router>
            <div>
                <div className="gnb">
                    <NavBar />
                    <MyInfo />
                </div>
                <div className="go_body">
                    <Routes>
                        {routes.map((route) => {
                            return (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={route.element}
                                />
                            );
                        })}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
