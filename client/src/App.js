import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Posts from "./pages/Posts";
import Members from "./pages/Members";
import History from "./pages/History";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import './index.css';

function App() {

  const [userState, setUserState] = useState({
    loggedIn: false,
    userName: "",
    userEmail: "",
    user_id: "",
    good_day_percentage: 0, 
    totalPosts: 0, 
    all_posts: [],
    good_post_array: [], 
    bad_post_array: [], 
    currentGoodDayStreak: 0
  });

  return (

    <div className="bg-green1">
      <UserContext.Provider value={{ userState, setUserState }}>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/posts" component={Posts} />
          {/* <Route exact path="/history" component={History} /> */}
          {/* <Route exact path="/members" component={Members} /> */}
          <AuthenticatedRoute exact path="/posts" Component={Posts} />
          <AuthenticatedRoute exact path="/members" Component={Members} />
          <AuthenticatedRoute exact path="/history" Component={History} />
        </Switch>
      </Router>
      <Footer />
      </UserContext.Provider>
    </div>

  );
}

export default App;
