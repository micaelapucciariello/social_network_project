import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/screens/Home";
import { Profile } from "./components/screens/Profile";
import { Signup } from "./components/screens/Signup";
import { Login } from "./components/screens/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
